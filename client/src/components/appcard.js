import React from 'react',
import {MDCRipple} from '@material/ripple';

const selector = '.mdc-button, .mdc-icon-button, .mdc-card__primary-action';
const ripples = [].map.call(document.querySelectorAll(selector), function(el) {
  return new MDCRipple(el);
});

//starter code for card usage
//<div class="mdc-card">
//
//</div>

//<div class="mdc-card">
//  <div class="mdc-card__primary-action" tabindex="0">
//    <!-- content within actionable area -->
//  </div>
//  <!-- ... content ... -->
//</div>