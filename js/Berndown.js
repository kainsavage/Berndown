// Components
import DoneRaces from '../js/DoneRaces.js';
import UpcomingRaces from '../js/UpcomingRaces.js';
import TopNav from '../js/TopNav.js';
import Footer from '../js/Footer.js';

import {template} from '../templates/template.js';

/**
 * Module for the Berndown component. This is the entirety of the Berndown
 * app including all subcomponents, templates, and controls.
 */
export default class Berndown {
  /**
   * Default constructor that creates all the subcomponents required by this module.
   */
  constructor() {
    this.element = template();

    // Context elements; we only need these for the instantiation
    // of this module's components.
    let navEl = this.element.find('nav'),
        tfootEl = this.element.find('tfoot'),
        tbodyEl = this.element.find('tbody'),
        toggleEl = this.element.find('.fa-toggle-off'),
        refreshEl = this.element.find('.fa-refresh'),
        fastForwardEl = this.element.find('.fa-fast-forward'),
        floppyEl = this.element.find('.fa-floppy-o');

    // Components of this module.
    this.topNav = new TopNav(navEl);
    this.footer = new Footer(tfootEl);
    this.doneRaces = new DoneRaces(tbodyEl, this.topNav, this.footer, toggleEl);
    this.upcomingRaces = new UpcomingRaces(tbodyEl, this.topNav, this.footer, refreshEl, fastForwardEl, floppyEl);

    $(document.body).append(this.element);
  }
}

$(document).ready( () => {
  let berndown = new Berndown();
});