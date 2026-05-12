const $tocBar = document.getElementById('toc-bar');
const $soloTrigger = document.getElementById('toc-solo-trigger');
const $triggers = document.getElementsByClassName('toc-trigger');
const $popup = document.getElementById('toc-popup');
const $btnClose = document.getElementById('toc-popup-close');

const SCROLL_LOCK = 'overflow-hidden';
const CLOSING = 'closing';

const BAR_HEIGHT = 16 * 3; // 3rem

function getTocOptions() {
  const headerElement = document.querySelector('header');

  const dynamicOffset = headerElement ? headerElement.offsetHeight : BAR_HEIGHT;

  return {
    tocSelector: '#toc-popup-content',
    contentSelector: '.content',
    ignoreSelector: '[data-toc-skip]',
    headingSelector: 'h2, h3, h4, h5',
    orderedList: !1,
    scrollSmooth: !1, 
    collapseDepth: 5,
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

function showPopup() {
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

function bindAnchorEvents() {
  const $anchors =
    document.getElementsByClassName('toc-link');

  [...$anchors].forEach((anchor) => {
    anchor.onclick = () => {
      requestAnimationFrame(() => {
        setTimeout(() => {
          hidePopup();
        }, 80);
      });
    };
  });
}

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

function initMobileToc() {
  if (
    document.querySelector(
      'main h2, main h3, main h4, main h5'
    ) === null
  ) {
    return;
  }
  
  if (window.innerWidth >= 1200) {
    return;
  }

  tocbot.init(getTocOptions());

  bindAnchorEvents();

  initBar();

  [...$triggers].forEach((trigger) => {
    trigger.onclick = () => showPopup();
  });

  $popup.onclick = (e) =>
    clickBackdrop(e);

  $btnClose.onclick = () =>
    hidePopup();

  $popup.oncancel = (e) => {
    e.preventDefault();

    hidePopup();
  };
}

document.addEventListener(
  'DOMContentLoaded',
  initMobileToc
);
