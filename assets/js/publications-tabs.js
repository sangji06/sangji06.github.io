/* Selected and All use the same Jekyll publications data. */
(function () {
  'use strict';
  const tabs = Array.from(document.querySelectorAll('.publication-tab[role="tab"]'));
  if (tabs.length !== 2) return;
  const panels = tabs.map(tab => document.getElementById(tab.getAttribute('aria-controls')));
  if (panels.some(panel => !panel)) return;

  function activate(index, moveFocus) {
    tabs.forEach((tab, i) => {
      const active = i === index;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      tab.classList.toggle('active', active);
      panels[i].hidden = !active;
    });
    if (moveFocus) tabs[index].focus();
  }

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => activate(i, false));
    tab.addEventListener('keydown', e => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        e.preventDefault();
        activate((i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length, true);
      } else if (e.key === 'Home' || e.key === 'End') {
        e.preventDefault();
        activate(e.key === 'Home' ? 0 : tabs.length - 1, true);
      }
    });
  });
  activate(0, false);
})();
