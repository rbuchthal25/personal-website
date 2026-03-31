/* ════════════════════════════════════
   PORTFOLIO — main.js
   Page routing and interactions.
════════════════════════════════════ */

/**
 * showPage(id)
 * Switches the visible page section and updates the active nav link.
 * Call this from any onclick handler or link in your HTML.
 *
 * @param {string} id - matches the id of a .page div (e.g. 'home', 'about')
 */
function showPage(id) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // Deactivate all nav links
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  // Show the target page
  const page = document.getElementById(id);
  if (page) {
    page.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Mark the matching nav link as active
  const link = document.querySelector(`.nav-links a[data-page="${id}"]`);
  if (link) link.classList.add('active');

  // Optional: update the browser URL hash (no page reload)
  history.pushState(null, '', `#${id}`);
}

/**
 * Handle browser back/forward navigation
 */
window.addEventListener('popstate', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  showPage(hash);
});

/**
 * On first load, show the page that matches the URL hash,
 * or default to 'home'.
 */
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '') || 'home';
  showPage(hash);
});
