document.querySelector("main h2, main h3")&&tocbot.refresh({
    tocSelector:"#toc",
    contentSelector:".content",
    ignoreSelector:"[data-toc-skip]",
    headingSelector:"h2, h3, h4, h5, h6",
    orderedList:!1,
    scrollSmooth:!1,
    collapseDepth: 6
});
