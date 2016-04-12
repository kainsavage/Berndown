export function template(raceDate, state) {
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
    element.addClass('caucus');
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
    element.addClass('primary');
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
    element.addClass('closed');
  else if(state.semiclosed)
    element.addClass('semiclosed');
  else if(state.semiopen)
    element.addClass('semiopen');
  else if(state.open)
    element.addClass('open');

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