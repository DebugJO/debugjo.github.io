/**
 * Mobile TOC for Chirpy
 */

const $tocBar = document.getElementById('toc-bar');
const $soloTrigger = document.getElementById('toc-solo-trigger');
const $triggers = document.getElementsByClassName('toc-trigger');
const $popup = document.getElementById('toc-popup');
const $btnClose = document.getElementById('toc-popup-close');

const SCROLL_LOCK = 'overflow-hidden';
const CLOSING = 'closing';

const BAR_HEIGHT = 16 * 3; // 3rem

/**
 * dynamic offset
 */
function getTocOptions() {
  const headerElement = document.querySelector('main h2, main h3, main h4, main h5');

  const dynamicOffset = headerElement
    ? headerElement.offsetHeight
    : BAR_HEIGHT;

  return {
    tocSelector: '#toc-popup-content',
    contentSelector: '.content',
    ignoreSelector: '[data-toc-skip]',
    headingSelector: 'h2, h3, h4, h5',
    orderedList: false,
    scrollSmooth: false,
    collapseDepth: 5,

    // desktop 스타일 동일 적용
    headingsOffset: dynamicOffset,
    scrollSmoothOffset: -dynamicOffset
  };
}

/**
 * TOC Bar Observer
 */
function initBar() {
  if (!$soloTrigger || !$tocBar) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        $tocBar.classList.toggle(
          'invisible',
          entry.isIntersecting
        );
      });
    },
    {
      rootMargin: `-${BAR_HEIGHT}px 0px 0px 0px`
    }
  );

  observer.observe($soloTrigger);
}

/**
 * popup close
 */
function hidePopup() {
  if (!$popup || !$popup.open) {
    return;
  }

  $popup.toggleAttribute(CLOSING);

  $popup.addEventListener(
    'animationend',
    () => {
      $popup.toggleAttribute(CLOSING);

      if ($popup.open) {
        $popup.close();
      }
    },
    { once: true }
  );

  document.documentElement.classList.remove(
    SCROLL_LOCK
  );

  document.body.classList.remove(
    SCROLL_LOCK
  );
}

/**
 * popup open
 */
function showPopup() {
  /**
   * popup 열기 전에
   * 최신 TOC refresh
   */
  document.querySelector(
    'main h2, main h3, main h4, main h5'
  ) &&
    tocbot.refresh(getTocOptions());

  bindAnchorEvents();

  document.documentElement.classList.add(
    SCROLL_LOCK
  );

  document.body.classList.add(
    SCROLL_LOCK
  );

  $popup.showModal();

  const activeItem =
    $popup.querySelector('li.is-active-li');

  if (activeItem) {
    activeItem.scrollIntoView({
      block: 'center'
    });
  }
}

/**
 * anchor click
 */
function bindAnchorEvents() {
  const $anchors =
    document.getElementsByClassName('toc-link');

  [...$anchors].forEach((anchor) => {
    anchor.onclick = () => {
      /**
       * 모바일 timing 문제 해결
       */
      requestAnimationFrame(() => {
        setTimeout(() => {
          hidePopup();
        }, 80);
      });
    };
  });
}

/**
 * backdrop click
 */
function clickBackdrop(event) {
  if ($popup.hasAttribute(CLOSING)) {
    return;
  }

  const rect = event.target.getBoundingClientRect();

  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    hidePopup();
  }
}

/**
 * init
 */
function initMobileToc() {
  /**
   * heading 없으면 종료
   */
  if (
    document.querySelector(
      'main h2, main h3, main h4, main h5'
    ) === null
  ) {
    return;
  }

  /**
   * mobile only
   */
  if (window.innerWidth >= 1200) {
    return;
  }

  /**
   * TOC init
   */
  tocbot.init(getTocOptions());

  bindAnchorEvents();

  initBar();

  /**
   * open button
   */
  [...$triggers].forEach((trigger) => {
    trigger.onclick = () => showPopup();
  });

  /**
   * backdrop
   */
  $popup.onclick = (e) =>
    clickBackdrop(e);

  /**
   * close button
   */
  $btnClose.onclick = () =>
    hidePopup();

  /**
   * ESC / cancel
   */
  $popup.oncancel = (e) => {
    e.preventDefault();

    hidePopup();
  };
}

/**
 * run
 */
document.addEventListener(
  'DOMContentLoaded',
  initMobileToc
);
