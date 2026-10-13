// Keep the navigation aligned with the section nearest the top of the page.
// All content and links remain usable when JavaScript is disabled.
const navigationLinks = [...document.querySelectorAll(".site-header nav a")];
const sections = navigationLinks.map(link => document.querySelector(link.hash));

function updateNavigation() {
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 150) activeSection = section;
  }
  if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4) {
    activeSection = sections[sections.length - 1];
  }
  for (const link of navigationLinks) {
    if (link.hash === `#${activeSection.id}`) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  }
}

let scheduled = false;
window.addEventListener("scroll", () => {
  if (scheduled) return;
  scheduled = true;
  requestAnimationFrame(() => {
    updateNavigation();
    scheduled = false;
  });
}, { passive: true });
window.addEventListener("resize", updateNavigation);
window.addEventListener("load", updateNavigation);
updateNavigation();
