import {observe} from '../js/Observe.js';

/**
 * Module for calculating delegates and votes for both candidates.
 */
export default class Footer {
  /**
   * Default constructor for holding all the footer data.
   */
  constructor(element) {
    this.element = element;

    this.clintonDelegatesDem   = 0;
    this.clintonDelegatesRep   = 0;
    this.clintonDelegatesTotal = 0;
    this.sandersDelegatesDem   = 0;
    this.sandersDelegatesRep   = 0;
    this.sandersDelegatesTotal = 0;
    this.total                 = 0;

    this.element.append(template);
  }

  get clintonDelegatesDem() {
    return this._clintonDelegatesDem;
  }
  set clintonDelegatesDem(val) {
    this._clintonDelegatesDem = val;

    this.element.find('.tclinton').attr('data-dem', this.clintonDelegatesDem);
  }
  get clintonDelegatesRep() {
    return this._clintonDelegatesRep;
  }
  set clintonDelegatesRep(val) {
    this._clintonDelegatesRep = val;

    this.element.find('.tclinton').attr('data-rep', this.clintonDelegatesRep);
  }
  get clintonDelegatesTotal() {
    return this._clintonDelegatesTotal;
  }
  set clintonDelegatesTotal(val) {
    this._clintonDelegatesTotal = val;

    this.element.find('.tclinton').html(this.clintonDelegatesTotal);
  }
  get sandersDelegatesDem() {
    return this._sandersDelegatesDem;
  }
  set sandersDelegatesDem(val) {
    this._sandersDelegatesDem = val;

    this.element.find('.tsanders').attr('data-dem', this.sandersDelegatesDem);
  }
  get sandersDelegatesRep() {
    return this._sandersDelegatesRep;
  }
  set sandersDelegatesRep(val) {
    this._sandersDelegatesRep = val;

    this.element.find('.tsanders').attr('data-dem', this.sandersDelegatesRep);
  }
  get sandersDelegatesTotal() {
    return this._sandersDelegatesTotal;
  }
  set sandersDelegatesTotal(val) {
    this._sandersDelegatesTotal = val;

    this.element.find('.tsanders').html(this.sandersDelegatesTotal);
  }
  get total() {
    return this._total;
  }
  set total(val) {
    this._total = val;

    this.element.find('.ttotal').html(this.total);
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