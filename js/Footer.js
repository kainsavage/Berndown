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
    this.clintonDelegates = observe(this.clintonDelegates, () => {
      element.html('');
      element.append(`
        <tr class="totals">
          <td>Total</td>
          <td></td>
          <td></td>
          <td class="tcvotes"></td>
          <td></td>
          <td></td>
          <td></td>
          <td class="tsvotes"></td>
          <td class="tclinton" data-rep="${this.clintonDelegates.rep}" data-dem="${this.clintonDelegates.dem}">${this.clintonDelegates.total}</td>
          <td class="tsanders" data-rep="${this.sandersDelegates.rep}" data-dem="${this.sandersDelegates.dem}">${this.sandersDelegates.total}</td>
          <td class="ttotal">${this.total}</td>
        </tr>
      `);
    });
  }
}