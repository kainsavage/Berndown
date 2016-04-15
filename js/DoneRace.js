export default class DoneRace {
  constructor(topNav, footer, raceDate) {
    this.topNav = topNav;
    this.footer = footer;
    this.raceDate = raceDate;
    this.element = $(`<template></template>`);

    raceDate.states.forEach( (state) => {
      this.element.append(new DoneRaceTemplate(raceDate, state).element);
    });

    // This is a dirty hack to get rid of the <template></template> node
    this.element = this.element.children();

    // A single race may have several states (rows)
    this.element.each( (index,row) => {
      let sanders   = parseInt($(row).find('td.sanders').text()),
          sandersp  = parseFloat($(row).find('.vsanders.percent').text()),
          clinton   = parseInt($(row).find('td.clinton').text()),
          clintonp  = parseFloat($(row).find('.vclinton.percent').text()),
          total     = parseInt($(row).find('td.total').text()),
          unpledged = total - sanders - clinton;

      $(row).find('[data-toggle="popover"]').each( (index,value) => {
        $(value).popover();
      });

      if(!isNaN(sanders) && !isNaN(clinton) && !isNaN(total)) {
        this.topNav.values.clintonDelegates       += clinton;
        this.footer.clintonDelegates.total += clinton;
        this.topNav.values.sandersDelegates       += sanders;
        this.footer.sandersDelegates.total += sanders;
        this.topNav.values.total                  += total;
        this.footer.total                  += total;
        this.topNav.values.unpledged              += unpledged;

        if($(row).find('.rep').length > 0 ||
           $(row).find('.repswing').length > 0) {
          this.footer.clintonDelegates.rep += clinton;
          this.footer.sandersDelegates.rep += sanders;
        }
        if($(row).find('.dem').length > 0 ||
           $(row).find('.demswing').length > 0) {
          this.footer.clintonDelegates.dem += clinton;
          this.footer.sandersDelegates.dem += sanders;
        }

        if(sanders + clinton !== total) {
          $(row).find('td.total').attr('data-content', unpledged);
          $(row).find('td.total').addClass('asterisk');
        }
      }
      if(!isNaN(clintonp) && !isNaN(sandersp)) {
        $(row).find('.vmargin.percent').text(Math.floor(Math.abs(clintonp - sandersp)));
      }
    });
  }
}

/**
 * Private class for templating a DoneRace.
 */
class DoneRaceTemplate {
  constructor(raceDate, state) {
    this.element = $(`
      <tr class="done ${state.winner}">
        <td class="type"><i class="fa" data-toggle="popover" data-trigger="hover" data-placement="left"></i> ${state.name}</td>
        <td>${state.winner}</td>
        <td class="vclinton">${state.votes.clinton.count}</td>
        <td class="vclinton percent">${state.votes.clinton.percent}</td>
        <td class="vmargin percent"></td>
        <td class="vsanders percent">${state.votes.sanders.percent}</td>
        <td class="vsanders">${state.votes.sanders.count}</td>
        <td class="clinton">${state.delegates.clinton}</td>
        <td class="sanders">${state.delegates.sanders}</td>
        <td class="total">${state.delegates.total}</td>
      </tr>
    `);

    if(state.first)
      this.element.prepend($(`<td rowspan="${raceDate.count}" class="date">${raceDate.date}</td>`));

    if(state.caucus) {
      this.element.addClass('caucus');
      if(state.closed) {
        this.element.find('i').addClass('fa-circle');
        this.element.find('i').attr('data-content', 'Caucus: Closed');
      }
      else if(state.semiclosed) {
        this.element.find('i').addClass('fa-times-circle-o');
        this.element.find('i').attr('data-content', 'Caucus: Semi-closed');
      }
      else if(state.semiopen) {
        this.element.find('i').addClass('fa-dot-circle-o');
        this.element.find('i').attr('data-content', 'Caucus: Semi-Open');
      }
      else if(state.open) {
        this.element.find('i').addClass('fa-circle-o');
        this.element.find('i').attr('data-content', 'Caucus: Open');
      }
    }
    else {
      this.element.addClass('primary');
      if(state.closed) {
        this.element.find('i').addClass('fa-square');
        this.element.find('i').attr('data-content', 'Primary: Closed');
      }
      else if(state.semiclosed) {
        this.element.find('i').addClass('fa-minus-square-o');
        this.element.find('i').attr('data-content', 'Primary: Semi-closed');
      }
      else if(state.semiopen) {
        this.element.find('i').addClass('fa-plus-square-o');
        this.element.find('i').attr('data-content', 'Primary: Semi-Open');
      }
      else if(state.open) {
        this.element.find('i').addClass('fa-square-o');
        this.element.find('i').attr('data-content', 'Primary: Open');
      }
    }

    if(state.closed)
      this.element.addClass('closed');
    else if(state.semiclosed)
      this.element.addClass('semiclosed');
    else if(state.semiopen)
      this.element.addClass('semiopen');
    else if(state.open)
      this.element.addClass('open');

    if(state.democrat) {
      if(state.swing)
        this.element.find('.type').addClass('demswing');
      else
        this.element.find('.type').addClass('dem');
    }
    else if(state.republican) {
      if(state.swing)
        this.element.find('.type').addClass('repswing');
      else
        this.element.find('.type').addClass('rep');
    }
  }
}