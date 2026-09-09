/* Navigation enhancements; the article and its links also work without JS. */
(() => {
  const contents = document.querySelector('.contents-panel');
  const toc = document.querySelector('.table_of_contents');
  const links = [...toc.querySelectorAll('a[href^="#"]')];
  const headings = links.map(link => document.getElementById(link.hash.slice(1)));
  const bar = document.querySelector('.reading-progress span');
  const wide = matchMedia('(min-width: 1320px)');
  const syncContents = () => {
    contents.open = wide.matches;
    contents.querySelector('summary').tabIndex = wide.matches ? -1 : 0;
  };
  syncContents();
  wide.addEventListener('change', syncContents);
  contents.addEventListener('toggle', () => {
    if (wide.matches && !contents.open) contents.open = true;
  });

  // Restore fragment navigation even when the target is in a closed comment.
  const revealTarget = (hash, scroll = false) => {
    let id;
    try { id = decodeURIComponent(hash.slice(1)); } catch { return; }
    const target = document.getElementById(id);
    if (!target) return;
    for (let node = target; node; node = node.parentElement) {
      if (node.tagName === 'DETAILS') node.open = true;
    }
    if (scroll) requestAnimationFrame(() => target.scrollIntoView({ block: 'start' }));
  };
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    if (toc.contains(link) && !wide.matches) contents.open = false;
    revealTarget(link.hash);
  });
  window.addEventListener('hashchange', () => revealTarget(location.hash, true));
  // Fonts may change heading positions after the initial fragment is resolved.
  window.addEventListener('load', () => revealTarget(location.hash, true));
  revealTarget(location.hash);

  let queued = false;
  let active = -1;
  function updateReadingPosition() {
    queued = false;
    const available = document.documentElement.scrollHeight - innerHeight;
    bar.style.transform = `scaleX(${available > 0 ? Math.min(1, Math.max(0, scrollY / available)) : 0})`;
    let current = -1;
    headings.forEach((heading, index) => {
      if (heading && heading.getBoundingClientRect().top <= 150) current = index;
    });
    if (current === active) return;
    if (active >= 0) links[active].removeAttribute('aria-current');
    active = current;
    if (active >= 0) {
      const link = links[active];
      link.setAttribute('aria-current', 'location');
      if (wide.matches) {
        const item = link.getBoundingClientRect();
        const panel = toc.getBoundingClientRect();
        if (item.top < panel.top || item.bottom > panel.bottom) {
          toc.scrollTop += item.top - panel.top - toc.clientHeight / 3;
        }
      }
    }
  }
  const schedule = () => {
    if (!queued) { queued = true; requestAnimationFrame(updateReadingPosition); }
  };
  window.addEventListener('scroll', schedule, { passive: true });
  window.addEventListener('resize', schedule);
  window.addEventListener('load', schedule);
  updateReadingPosition();
})();
