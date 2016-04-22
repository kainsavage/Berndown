import {observable,observableArray} from '../js/Observe.js';

/**
 * Module for calculating delegates and votes for both candidates.
 */
export default class TopNav {
  /**
   * Default constructor for holding all the calculator data.
   */
  constructor(element) {
    this.element = element;

    observable(this,'clintonDelegates',() => {
      this.element.find('.clinton').html(this.clintonDelegates);
      this.element.find('#remaining').html(`(${this.remaining} remaining; ${this.unpledged} unpledged)`);
    });
    observable(this,'sandersDelegates',() => {
      this.element.find('.sanders').html(this.sandersDelegates);
      this.element.find('#remaining').html(`(${this.remaining} remaining; ${this.unpledged} unpledged)`);
    });
    observable(this,'total',() => {
      this.element.find('#remaining').html(`(${this.remaining} remaining; ${this.unpledged} unpledged)`);
    });

    observableArray(this,'arr',() => {}, () => {});

    this.total = 0;
    this.unpledged = 0;

    element.append(template);
  }

  get remaining() {
    return this.total - this.clintonDelegates - this.sandersDelegates;
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