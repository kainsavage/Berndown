import {observe} from '../js/Observe.js';

/**
 * Module for calculating delegates and votes for both candidates.
 */
export default class TopNav {
  /**
   * Default constructor for holding all the calculator data.
   */
  constructor(element) {
    this.values = {
      clintonDelegates: 0,
      sandersDelegates: 0,
      total: 0,
      remaining: () => { 
        return (this.values.total - this.values.clintonDelegates - this.values.sandersDelegates); 
      },
      unpledged: 0
    };

    // Observe value changes and update the elements accordingly
    this.values = observe(this.values, (valueName, newValue, oldValue) => {
      if(valueName === 'clintonDelegates') {
        element.find('.clinton').html(this.values.clintonDelegates);
      }
      else if(valueName === 'sandersDelegates') {
        element.find('.sanders').html(this.values.sandersDelegates);
      }
      element.find('#remaining').html(`(${this.values.remaining()} remaining; ${this.values.unpledged} unpledged)`);
    });

    element.append(new TopNavTemplate().element);
  }
}

/**
 * Private template class.
 */
class TopNavTemplate {
  constructor(html) {
    this.element = $(`
      <div class="clinton-pic navbar-left"><div></div></div>
      <div class="clinton navbar-text navbar-left"></div>
      <div class="navbar-text navbar-center">Delegates</div>
      <div class="navbar-text navbar-center" id="remaining"></div>
      <div class="sanders-pic navbar-right"><div></div></div>
      <div class="sanders navbar-text navbar-right"></div>
    `);
  }
}