import {template} from '../dist/footer.js';
import {observe} from '../js/Observe.js';

/**
 * Module for calculating delegates and votes for both candidates.
 */
export default class Footer {
  /**
   * Default constructor for holding all the footer data.
   */
  constructor(element) {
    this.clintonDelegates = {
        dem:   0,
        rep:   0,
        total: 0
    };
    this.sandersDelegates = {
        dem:   0,
        rep:   0,
        total: 0
    };
    this.total = 0;

    // Only need to observe one of these since the other three are tightly coupled
    // to this component and will be updated with the changes call.
    this.clintonDelegates = observe(this.clintonDelegates, (changes) => {
      changes.forEach( (change) => {
        element.html('');
        element.append($(template({clintonDelegates: this.clintonDelegates, sandersDelegates: this.sandersDelegates, total: this.total})));
      });
    });
  }
}