import {observable} from '../js/Observe.js';

/**
 * Module for calculating delegates and votes for both candidates.
 */
export default class Footer {
  /**
   * Default constructor for holding all the footer data.
   */
  constructor(element) {
    this.element = element;

    observable(this,'clintonDelegatesDem',() => {
      this.element.find('.tclinton').attr('data-dem', this.clintonDelegatesDem);
    });
    observable(this,'clintonDelegatesRep',() => {
      this.element.find('.tclinton').attr('data-rep', this.clintonDelegatesRep);
    });
    observable(this,'clintonDelegatesTotal',() => {
      this.element.find('.tclinton').html(this.clintonDelegatesTotal);
    });
    observable(this,'sandersDelegatesDem',() => {
      this.element.find('.tsanders').attr('data-dem', this.sandersDelegatesDem);
    });
    observable(this,'sandersDelegatesRep',() => {
      this.element.find('.tsanders').attr('data-rep', this.sandersDelegatesRep);
    });
    observable(this,'sandersDelegatesTotal',() => {
      this.element.find('.tsanders').html(this.sandersDelegatesTotal);
    });
    observable(this,'total',() => {
      this.element.find('.ttotal').html(this.total);
    });

    this.element.append(template);
  }
}

const template = $(`
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
    <td class="ttotal"></td>
  </tr>
`);