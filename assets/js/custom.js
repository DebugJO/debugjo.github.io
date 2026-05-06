document.addEventListener("readystatechange", () => {
  if (document.readyState === "interactive") {
    document.body.classList.add("loaded");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("a");

  links.forEach(link => {
    if (
      link.target === "_blank" ||
      link.hasAttribute("download") ||
      link.href.startsWith("javascript:") ||
      link.href.includes("#")
    ) {
      return;
    }

    link.addEventListener("click", e => {
      e.preventDefault();
      const url = link.href;
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location.href = url;
      }, 200); // CSS transition 시간과 맞춰야 함
    });
  });
});
