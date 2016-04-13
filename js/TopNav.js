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

    this.values = observe(this.values, () => {
      element.html('');
      element.append(`
        <div class="clinton-pic navbar-left"><div></div></div>
        <div class="clinton navbar-text navbar-left">${this.values.clintonDelegates}</div>
        <div class="navbar-text navbar-center">Delegates</div>
        <div class="navbar-text navbar-center" id="remaining">(${this.values.remaining()} remaining; ${this.values.unpledged} unpledged)</div>
        <div class="sanders-pic navbar-right"><div></div></div>
        <div class="sanders navbar-text navbar-right">${this.values.sandersDelegates}</div>
      `);
    });
  }
}