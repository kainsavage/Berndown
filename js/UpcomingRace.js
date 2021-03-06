import {getParameterByName} from '../js/QueryStringHelper.js';

export default class UpcomingRace {
  constructor(raceDate, topNav, footer, refreshEl, fastForwardEl) {
    this.topNav = topNav;
    this.footer = footer;
    this.refreshEl = refreshEl;
    this.fastForwardEl = fastForwardEl;

    this.element = $(`<template></template>`);

    raceDate.states.forEach( (state) => {
      this.element.append(template(raceDate, state));
    });

    // This is a dirty hack to get rid of the <template></template> node
    this.element = this.element.children();

    // A single race may have several states; add popovers to each.
    this.element.find('[data-toggle="popover"]').each( (index,popover) => {
      $(popover).popover();
    });

    // A single race may have several states; add sliders to each.
    this.element.find('.slider').each( (index,value) => {
      let slider = $(value);
      slider.slider()
        .on('change', (val) => { this.slide(slider, val); })
        .on('slideStop', () => {
          this.refreshEl.show();
          this.fastForwardEl.hide();
        });

      let max     = parseInt(slider.data('slider-max')),
          clinton = parseInt(getParameterByName(slider.data('state'))),
          sanders = max - clinton;

      if(!isNaN(max) && slider.data('state') !== undefined && !isNaN(clinton) && !isNaN(sanders)) {
        slider.closest('tr').prev('tr').find('.clinton').text(clinton);
        slider.closest('tr').prev('tr').find('.sanders').text(sanders);
        this.topNav.clintonDelegates      += clinton;
        this.footer.clintonDelegatesTotal += clinton;
        this.topNav.sandersDelegates      += sanders;
        this.footer.sandersDelegatesTotal += sanders;
        this.refreshEl.show();
        this.fastForwardEl.hide();
      }

      this.topNav.total += max;
      this.footer.total += max;
    });
  }

  /**
   * Function for handling the event when a slider is slidden.
   */
  slide(slider, value) {
    let clinton = parseInt(value.value.newValue),
        max     = parseInt($(slider).data('slider-max')),
        sanders = max - clinton;

    if (!isNaN(clinton) && !isNaN(max) && !isNaN(sanders)) {
      if($(slider).closest('tr').prev('tr').find('.clinton').text() !== '-' &&
         $(slider).closest('tr').prev('tr').find('.sanders').text() !== '-') {
        this.topNav.clintonDelegates      -= value.value.oldValue;
        this.footer.clintonDelegatesTotal -= value.value.oldValue;
        this.topNav.sandersDelegates      -= (max - value.value.oldValue);
        this.footer.sandersDelegatesTotal -= (max - value.value.oldValue);
      }
      $(slider).closest('tr').prev('tr').find('.clinton').text(clinton);
      $(slider).closest('tr').prev('tr').find('.sanders').text(sanders);
      this.topNav.clintonDelegates      += clinton;
      this.footer.clintonDelegatesTotal += clinton;
      this.topNav.sandersDelegates      += sanders;
      this.footer.sandersDelegatesTotal += sanders;
    }
  }
}

function template(raceDate, state) {
  let element = $(`
    <tr>
      <td rowspan="2" class="type"><i class="fa" data-toggle="popover" data-trigger="hover" data-placement="left"></i> ${state.name}</td>
      <td rowspan="2"></td>
      <td rowspan="2"></td>
      <td rowspan="2"></td>
      <td rowspan="2"></td>
      <td rowspan="2"></td>
      <td rowspan="2"></td>
      <td class="clinton">-</td>
      <td class="sanders">-</td>
      <td rowspan="2" class="total">${state.delegates.total}</td>
    </tr>
    <tr>
      <td colspan="2"><input class="slider" type='text' data-slider-min='0' data-slider-max='${state.delegates.total}' data-slider-step='1' data-slider-value='${state.delegates.half}' data-slider-tooltip='hide' data-state='${state.abbr}'/></td>
    </tr>
  `);

  if(state.first)
    element.first().prepend($(`<td rowspan="${raceDate.count}" class="date">${raceDate.date}</td>`));

  if(state.caucus) {
    element.find('tr').addClass('caucus');
    if(state.closed) {
      element.find('i').addClass('fa-circle');
      element.find('i').attr('data-content', 'Caucus: Closed');
    }
    else if(state.semiclosed) {
      element.find('i').addClass('fa-times-circle-o');
      element.find('i').attr('data-content', 'Caucus: Semi-closed');
    }
    else if(state.semiopen) {
      element.find('i').addClass('fa-dot-circle-o');
      element.find('i').attr('data-content', 'Caucus: Semi-Open');
    }
    else if(state.open) {
      element.find('i').addClass('fa-circle-o');
      element.find('i').attr('data-content', 'Caucus: Open');
    }
  }
  else {
    element.find('tr').addClass('primary');
    if(state.closed) {
      element.find('i').addClass('fa-square');
      element.find('i').attr('data-content', 'Primary: Closed');
    }
    else if(state.semiclosed) {
      element.find('i').addClass('fa-minus-square-o');
      element.find('i').attr('data-content', 'Primary: Semi-closed');
    }
    else if(state.semiopen) {
      element.find('i').addClass('fa-plus-square-o');
      element.find('i').attr('data-content', 'Primary: Semi-Open');
    }
    else if(state.open) {
      element.find('i').addClass('fa-square-o');
      element.find('i').attr('data-content', 'Primary: Open');
    }
  }

  if(state.closed)
    element.find('tr').addClass('closed');
  else if(state.semiclosed)
    element.find('tr').addClass('semiclosed');
  else if(state.semiopen)
    element.find('tr').addClass('semiopen');
  else if(state.open)
    element.find('tr').addClass('open');

  if(state.democrat) {
    if(state.swing)
      element.find('.type').addClass('demswing');
    else
      element.find('.type').addClass('dem');
  }
  else if(state.republican) {
    if(state.swing)
      element.find('.type').addClass('repswing');
    else
      element.find('.type').addClass('rep');
  }

  return element;
}