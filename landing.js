// Landing routing for single index.html
// If user comes to /index.html -> show landing.
// If user comes to /admin -> show admin.
(function () {
  function showAdminIfNeeded() {
    const path = window.location.pathname || "";

    // express.static serves /admin? -> but browser path will still be '/admin'
    // (kept for backward compatibility; not used)
    // legacy variable (not used)
    const isAdminRoute =
      path.endsWith("/admin") || path.endsWith("/index.html");

    const adminShell = document.querySelector(".admin-shell");
    const landing = document.querySelector(".landing-container");

    if (!adminShell || !landing) return;

    // We decide: /admin and /index.html should open admin panel? You requested separate option.
    // So: only /admin opens admin UI; /index.html shows landing.
    // also support hash-based routing like: /index.html#admin
    const shouldShowAdmin =
      path.endsWith("/admin") ||
      path.endsWith("/admin.html") ||
      window.location.hash === "#admin";

    if (shouldShowAdmin) {
      landing.style.display = "none";
      adminShell.style.display = "block";
    } else {
      landing.style.display = "block";
      adminShell.style.display = "none";
    }
  }

  document.addEventListener("DOMContentLoaded", showAdminIfNeeded);
})();
