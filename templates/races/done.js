
export function template(raceDate, state) {
  let element = $(`
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
    element.prepend($(`<td rowspan="${raceDate.count}" class="date">${raceDate.date}</td>`));

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