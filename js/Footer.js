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

    this.element = element;
    this.element.append(new FooterTemplate().element);

    this.clintonDelegates = observe(this.clintonDelegates, (name, newValue, oldValuel) => {
      this.element.find('.tclinton').attr('data-rep', this.clintonDelegates.rep);
      this.element.find('.tclinton').attr('data-dem', this.clintonDelegates.dem);
      this.element.find('.tclinton').html(this.clintonDelegates.total);
    });
    this.sandersDelegates = observe(this.sandersDelegates, () => {
      this.element.find('.tsanders').attr('data-rep', this.sandersDelegates.rep);
      this.element.find('.tsanders').attr('data-dem', this.sandersDelegates.dem);
      this.element.find('.tsanders').html(this.sandersDelegates.total);
    });
  }
}

class FooterTemplate {
  constructor() {
    this.element = $(`
      <tr class="totals">
        <td>Total</td>
        <td></td>
        <td></td>
        <td class="tcvotes"></td>
        <td></td>
        <td></td>
        <td></td>
        <td class="tsvotes"></td>
        <td class="tclinton" data-rep="" data-dem=""></td>
        <td class="tsanders" data-rep="" data-dem=""></td>
        <td class="ttotal">${this.total}</td>
      </tr>
    `);
  }
}