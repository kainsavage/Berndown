import {observe} from '../js/Observe.js';

/**
 * Module for calculating delegates and votes for both candidates.
 */
export default class TopNav {
  /**
   * Default constructor for holding all the calculator data.
   */
  constructor(element) {
    this.element = element;

    this.clintonDelegates = 0;
    this.sandersDelegates = 0;
    this.total = 0;
    this.unpledged = 0;

    element.append(template);
  }

  get clintonDelegates() {
    return this._clintonDelegates;
  }
  set clintonDelegates(val) {
    this._clintonDelegates = val;

    this.element.find('.clinton').html(this.clintonDelegates);
    this.element.find('#remaining').html(`(${this.remaining} remaining; ${this.unpledged} unpledged)`);
  }
  get sandersDelegates() {
    return this._sandersDelegates;
  }
  set sandersDelegates(val) {
    this._sandersDelegates = val;

    this.element.find('.sanders').html(this.sandersDelegates);
    this.element.find('#remaining').html(`(${this.remaining} remaining; ${this.unpledged} unpledged)`);
  }
  get total() {
    return this._total;
  }
  set total(val) {
    this._total = val;
    this.element.find('#remaining').html(`(${this.remaining} remaining; ${this.unpledged} unpledged)`);
  }
  get remaining() {
    return this.total - this.clintonDelegates - this.sandersDelegates;
  }
  get unpledged() {
    return this._unpledged;
  }
  set unpledged(val) {
    this._unpledged = val;
  }
}

/**
 * Private template.
 */
const template = $(`
  <div class="clinton-pic navbar-left"><div></div></div>
  <div class="clinton navbar-text navbar-left"></div>
  <div class="navbar-text navbar-center">Delegates</div>
  <div class="navbar-text navbar-center" id="remaining"></div>
  <div class="sanders-pic navbar-right"><div></div></div>
  <div class="sanders navbar-text navbar-right"></div>
`);