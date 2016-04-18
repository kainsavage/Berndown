// Components
import DoneRaces from '../js/DoneRaces.js';
import UpcomingRaces from '../js/UpcomingRaces.js';
import TopNav from '../js/TopNav.js';
import Footer from '../js/Footer.js';

/**
 * Module for the Berndown component. This is the entirety of the Berndown
 * app including all subcomponents, templates, and controls.
 */
export default class Berndown {
  /**
   * Default constructor that creates all the subcomponents required by this module.
   */
  constructor() {
    this.element = template;

    // Context elements; we only need these for the instantiation
    // of this module's components.
    let navEl = this.element.find('nav'),
        tfootEl = this.element.find('tfoot'),
        tbodyEl = this.element.find('tbody'),
        toggleEl = this.element.find('.fa-toggle-off'),
        refreshEl = this.element.find('.fa-refresh'),
        fastForwardEl = this.element.find('.fa-fast-forward'),
        floppyEl = this.element.find('.fa-floppy-o');

    // Components of this module.
    this.topNav = new TopNav(navEl);
    this.footer = new Footer(tfootEl);
    this.doneRaces = new DoneRaces(tbodyEl, this.topNav, this.footer, toggleEl);
    this.upcomingRaces = new UpcomingRaces(tbodyEl, this.topNav, this.footer, refreshEl, fastForwardEl, floppyEl);

    $(document.body).append(this.element);
  }
}

const template =  $(`
  <div>
    <!-- TOTALS -->
    <nav class="navbar navbar-default navbar-fixed-top">
    </nav>
    <!-- /TOTALS -->
    <div id="wrapper">
      <div id="page-wrapper">
        <div class="row">
            <div class="col-lg-12">
                <h1 class="page-header">The BernDown - 2,392 Delegates required to win</h1>
            </div>
            <!-- /.col-lg-12 -->
        </div>
        <div class="row">
          <div class="col-lg-12">
            <!-- /.panel -->
            <div class="panel panel-default">
              <div class="panel-heading">
                  <i class="fa fa-bar-chart-o fa-fw"></i> Projected Vote
              </div>
              <!-- /.panel-heading -->
              <div class="panel-body">
                <div class="row">
                  <div class="col-lg-12">
                    <div class="table-responsive">
                      <table class="table table-bordered table-hover table-striped">
                        <thead>
                          <tr>
                            <th rowspan="2">Date</th>
                            <th rowspan="2">State</th>
                            <th rowspan="2">Winner</th>
                            <th colspan="2" class="clinton">Clinton</th>
                            <th rowspan="2">Margin</th>
                            <th colspan="2" class="sanders">Sanders</th>
                            <th rowspan="1" colspan="3"><i class="fa fa-floppy-o" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Save your projections so you can share the url"></i><i class="fa fa-toggle-off" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Show/hide already awarded states."></i> Delegates <i class="fa fa-refresh" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Reset to original counts"></i><i class="fa fa-fast-forward" data-toggle="popover" data-trigger="hover" data-placement="left" data-content="Project remaining with half the delegates awarded to each candidate"></i></th>
                          </tr>
                          <tr>
                            <th class="clinton">Votes</th>
                            <th class="clinton">%</th>
                            <th class="sanders">%</th>
                            <th class="sanders">Votes</th>
                            <th class="clinton">Clinton</th>
                            <th class="sanders">Sanders</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                        </tbody>
                        <tfoot>
                        </tfoot>
                      </table>
                    </div>
                    <!-- /.table-responsive -->
                  </div>
                </div>
                <!-- /.row -->
              </div>
              <!-- /.panel-body -->
            </div>
            <!-- /.panel -->
          </div>
          <!-- /.col-lg-8 -->
        </div>
        <!-- /.row -->
      </div>
      <!-- /#page-wrapper -->
    </div>
    <!-- /#wrapper -->
  </div>
`);

$(document).ready( () => {
  let berndown = new Berndown();
});