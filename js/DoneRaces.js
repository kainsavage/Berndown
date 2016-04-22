import DoneRace from '../js/DoneRace.js';
import {observableArray} from '../js/Observe.js';

/**
 * Module for handling everything to do with a done race.
 */
export default class DoneRaces {
  /**
   * Default constructor.
   */
  constructor(el, topNav, footer, toggle) {
    this.topNav = topNav;
    this.footer = footer;
    this.element = el;
    this.toggle = toggle;
    this.toggle.on('click', () => this.hideCompleted() );
    this.toggle.popover();

    observableArray(this,'races', (race) => this.element.append(race.element));

    // Technically, this is an async call which constructors do not
    // allow, but since we are not awaiting its return, it can be
    // called normally. Behind the scenes, this is kicking off a
    // promise and never passing a callback to .done()
    this.render();
  }

  /**
   * Asynchronous function for rendering. We must fetch our race
   * data to load.
   */
  async render() {
    let data = await $.getJSON('../js/races/done.json');

    data.data.forEach( (value) => this.races.push(
      new DoneRace(this.topNav, this.footer, value)
    ));
  }

  /**
   * Function for showing all the done races.
   */
  showCompleted() {
      this.element.find('.done').each( (index,value) => {
          $(value).show();
      });

      this.toggle.addClass('fa-toggle-off');
      this.toggle.removeClass('fa-toggle-on');

      this.toggle.on('click', () => { this.hideCompleted(); });
  }

  /**
   * Function for hiding all the done races.
   */
  hideCompleted() {
      this.element.find('.done').each( (index,value) => {
          $(value).hide();
      });

      this.toggle.addClass('fa-toggle-on');
      this.toggle.removeClass('fa-toggle-off');

      this.toggle.on('click', () => { this.showCompleted(); });
  }
}