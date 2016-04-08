import {getParameterByName} from '../js/QueryStringHelper.js';
import {template} from '../dist/Upcoming.js';

export default class UpcomingRace {
  constructor(raceDate, topNav, footer, refreshEl, fastForwardEl) {
    this.topNav = topNav;
    this.footer = footer;
    this.refreshEl = refreshEl;
    this.fastForwardEl = fastForwardEl;

    this.element = $(template(raceDate));

    // A single race may have several states; add popovers to each.
    this.element.find('[data-toggle="popover"]').each( (index,popover) => {
      $(popover).popover();
    });

    // A single race may have several states; add sliders to each.
    this.element.find('.slider').each( (index,value) => {
      let slider = $(value);
      slider.slider()
        .on('change', (val) => { this.slide(slider, val); })
        .on('slideStop', () => {
          this.refreshEl.show();
          this.fastForwardEl.hide();
        });

      let max     = parseInt(slider.data('slider-max')),
          clinton = parseInt(getParameterByName(slider.data('state'))),
          sanders = max - clinton;

      if(!isNaN(max) && slider.data('state') !== undefined && !isNaN(clinton) && !isNaN(sanders)) {
        slider.closest('tr').prev('tr').find('.clinton').text(clinton);
        slider.closest('tr').prev('tr').find('.sanders').text(sanders);
        this.topNav.values.clintonDelegates       += clinton;
        this.footer.clintonDelegates.total += clinton;
        this.topNav.values.sandersDelegates       += sanders;
        this.footer.sandersDelegates.total += sanders;
        this.refreshEl.show();
        this.fastForwardEl.hide();
      }

      this.topNav.values.total += max;
      this.footer.total += max;
    });
  }

  /**
   * Function for handling the event when a slider is slidden.
   */
  slide(slider, value) {
    let clinton = parseInt(value.value.newValue),
        max     = parseInt($(slider).data('slider-max')),
        sanders = max - clinton;

    if (!isNaN(clinton) && !isNaN(max) && !isNaN(sanders)) {
      if($(slider).closest('tr').prev('tr').find('.clinton').text() !== '-' &&
         $(slider).closest('tr').prev('tr').find('.sanders').text() !== '-') {
        this.topNav.values.clintonDelegates       -= value.value.oldValue;
        this.footer.clintonDelegates.total -= value.value.oldValue;
        this.topNav.values.sandersDelegates       -= (max - value.value.oldValue);
        this.footer.sandersDelegates.total -= (max - value.value.oldValue);
      }
      $(slider).closest('tr').prev('tr').find('.clinton').text(clinton);
      $(slider).closest('tr').prev('tr').find('.sanders').text(sanders);
      this.topNav.values.clintonDelegates       += clinton;
      this.footer.clintonDelegates.total += clinton;
      this.topNav.values.sandersDelegates       += sanders;
      this.footer.sandersDelegates.total += sanders;
    }
  }
}