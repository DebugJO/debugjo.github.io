import { TocMobile as mobile } from './toc-mobile.js';
import { TocDesktop as desktop } from './toc-desktop.js';

const desktopMode = matchMedia('(min-width: 1200px)');

function refresh(e) {
  if (e.matches) {
    if (mobile.popupOpened) {
      mobile.hidePopup();
    }

    desktop.refresh();
  } else {
    mobile.refresh();
  }
}

function init() {
  if (document.querySelector('main>article[data-toc="true"]') === null) {
    return;
  }

  if (desktopMode.matches) {
    desktop.init();
  } else {
    mobile.init();
  }

  const $tocWrapper = document.getElementById('toc-wrapper');
  $tocWrapper.classList.remove('invisible');

  desktopMode.onchange = refresh;
}

export { init as initToc };
