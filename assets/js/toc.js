const dynamicOffset = document.querySelector('header').offsetHeight + 20;

document.querySelector("main h2, main h3,  main h4,  main h5")&&tocbot.refresh({
    tocSelector:"#toc",
    contentSelector:".content",
    ignoreSelector:"[data-toc-skip]",
    headingSelector:"h2, h3, h4, h5",
    orderedList:!1,
    scrollSmooth:!1,
    collapseDepth: 5,
    headingsOffset: dynamicOffset
});
