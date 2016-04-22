import {getParameterByName} from '../js/QueryStringHelper.js';
import {observableArray} from '../js/Observe.js';

import UpcomingRace from '../js/UpcomingRace.js';

/**
 * Module for handling everything to with win an upcoming race component.
 */
export default class UpcomingRaces {
  /**
   * Default constructor
   */
  constructor(el, topNav, footer, refreshEl, fastForwardEl, saveEl) {
    this.topNav = topNav;
    this.footer = footer;
    this.edited = false;

    this.element = el;
    this.refreshEl = refreshEl;
    this.fastForwardEl = fastForwardEl;
    this.saveEl = saveEl;

    this.refreshEl.hide();
    this.fastForwardEl.show();

    this.refreshEl.on('click', () => this.refresh() );
    this.fastForwardEl.on('click', () => this.fastForward() );
    this.saveEl.on('click', () => this.saveProjections() );

    observableArray(this,'races',(race) => this.element.append(race.element) );

    // Technically, this is an async call which constructors do not
    // allow, but since we are not awaiting its return, it can be
    // called normally. Behind the scenes, this is kicking off a
    // promise and never passing a callback to .done()
    this.render();
  }

  /**
   * Asynchronous function to render the upcoming races.
   */
  async render() {
    let data = await $.getJSON('../js/races/upcoming.json');

    data.data.forEach( (value) => this.races.push(
      new UpcomingRace(value, this.topNav, this.footer, this.refreshEl, this.fastForwardEl, this.edited)
    ));
  }

  /**
   * Function for taking the current productions for all upcoming races and
   * "saving" them. Really, this is just a redirect to the same page with the
   * query string set appropriately to load the same values for all the upcoming
   * races as they are currently set.
   */
  saveProjections() {
    let qs = '?',
        location = window.location.href;

    $(this.races).each( (raceIndex,raceEl) => {
      raceEl.element.find('.slider').each( (index,value) => {
        let max = parseInt($(value).data('slider-max'));

        if(!isNaN(max) && $(value).data('state') !== undefined &&
           $(value).closest('tr').prev('tr').find('.clinton').text() !== '-') {
          qs += $(value).data('state') + "=" + $(value).closest('tr').prev('tr').find('.clinton').text() + "&";
        }
      });
    });

    // Kill that trailing amp
    qs = qs.substring(0,qs.length-1);

    if(location.indexOf('?') > 0) {
      location = location.substring(0,location.indexOf('?'));
    }
    window.location = location + qs;
  }

  /**
   * Function for resetting all the upcoming races slider bars to undecided.
   */
  refresh() {
    $(this.races).each( (raceIndex,raceEl) => {
      raceEl.element.find('.slider').each( (index,value) => {
        let max = parseInt($(value).data('slider-max')),
            clinton = parseInt($(value).closest('tr').prev('tr').find('.clinton').text()),
            sanders = parseInt($(value).closest('tr').prev('tr').find('.sanders').text());

        if (!isNaN(max) && !isNaN(clinton) && !isNaN(sanders)) {
          this.topNav.clintonDelegates -= clinton;
          this.topNav.sandersDelegates -= sanders;
          $(value).closest('tr').prev('tr').find('.clinton').text('-');
          $(value).closest('tr').prev('tr').find('.sanders').text('-');
        }
      });
    });

    this.fastForwardEl.show();
    this.refreshEl.hide();
  }

  /**
   * Function for projecting all upcoming races as if they were split 50-50
   * and updating all the sliders accordingly.
   */
  fastForward() {
    $(this.races).each( (raceIndex,raceEl) => {
      raceEl.element.find('input.slider').each( (index,value) => {
        let val = parseInt(value.value),
            max = parseInt($(value).data('slider-max')),
            clinton = parseInt($(value).closest('tr').prev('tr').find('.clinton').text()),
            sanders = parseInt($(value).closest('tr').prev('tr').find('.sanders').text());

        if (!isNaN(clinton) && !isNaN(sanders)) {
          this.topNav.clintonDelegates -= clinton;
          this.topNav.sandersDelegates -= sanders;
        }

        if (!isNaN(val) && !isNaN(max)) {
          $(value).closest('tr').prev('tr').find('.clinton').text(val);
          $(value).closest('tr').prev('tr').find('.sanders').text(max - val);
          this.topNav.clintonDelegates += val;
          this.topNav.sandersDelegates += max - val;
        }
      });
    });

    this.refreshEl.show();
    this.fastForwardEl.hide();
  }
}