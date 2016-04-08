import {template} from '../dist/navbar.js';
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
      total:            0,
      remaining:        () => { 
        return (this.values.total - this.values.clintonDelegates - this.values.sandersDelegates); 
      },
      unpledged:        0
    };

    this.values = observe(this.values, (changes) => {
      changes.forEach( (change) => {
        element.html('');
        element.append($(template(this.values)));
      });
    });
  }
}