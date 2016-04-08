import {template} from '../dist/Done.js';

export default class DoneRace {
  constructor(topNav, footer, raceDate) {
    this.topNav = topNav;
    this.footer = footer;
    this.raceDate = raceDate;

    this.element = $(template(this.raceDate));

    // A single race may have several states (rows)
    this.element.each( (index,row) => {
      let sanders   = parseInt($(row).find('td.sanders').text()),
          sandersp  = parseFloat($(row).find('.vsanders.percent').text()),
          clinton   = parseInt($(row).find('td.clinton').text()),
          clintonp  = parseFloat($(row).find('.vclinton.percent').text()),
          total     = parseInt($(row).find('td.total').text()),
          unpledged = total - sanders - clinton;

      $(row).find('[data-toggle="popover"]').each( (index,value) => {
        $(value).popover();
      });

      if(!isNaN(sanders) && !isNaN(clinton) && !isNaN(total)) {
        this.topNav.values.clintonDelegates       += clinton;
        this.footer.clintonDelegates.total += clinton;
        this.topNav.values.sandersDelegates       += sanders;
        this.footer.sandersDelegates.total += sanders;
        this.topNav.values.total                  += total;
        this.footer.total                  += total;
        this.topNav.values.unpledged              += unpledged;

        if($(row).find('.rep').length > 0 ||
           $(row).find('.repswing').length > 0) {
          this.footer.clintonDelegates.rep += clinton;
          this.footer.sandersDelegates.rep += sanders;
        }
        if($(row).find('.dem').length > 0 ||
           $(row).find('.demswing').length > 0) {
          this.footer.clintonDelegates.dem += clinton;
          this.footer.sandersDelegates.dem += sanders;
        }

        if(sanders + clinton !== total) {
          $(row).find('td.total').attr('data-content', unpledged);
          $(row).find('td.total').addClass('asterisk');
        }
      }
      if(!isNaN(clintonp) && !isNaN(sandersp)) {
        $(row).find('.vmargin.percent').text(Math.floor(Math.abs(clintonp - sandersp)));
      }
    });
  }
}