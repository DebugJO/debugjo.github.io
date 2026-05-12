document.addEventListener('DOMContentLoaded', () => {
  if (window.innerWidth < 1200) {
    return;
  }

  const mediaQuery =
    window.matchMedia('(min-width: 1200px)');

  mediaQuery.addEventListener('change', () => {
    location.reload();
  });
  
  const headerElement =
    document.querySelector('main');

  const dynamicOffset = headerElement
    ? headerElement.offsetHeight
    : 0;

  document.querySelector(
    'main h2, main h3, main h4, main h5'
  ) &&
    tocbot.refresh({
      tocSelector: '#toc',
      contentSelector: '.content',
      ignoreSelector: '[data-toc-skip]',
      headingSelector: 'h2, h3, h4, h5',
      orderedList: false,
      scrollSmooth: false,
      collapseDepth: 5,
      headingsOffset: dynamicOffset,
      scrollSmoothOffset: -dynamicOffset
    });
});
