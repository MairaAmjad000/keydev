
        $(function() {
            $('.lazy').Lazy();
        });

      /* Reload on back/forward only when the page itself changes (path or query string).
         A hash-only change (portfolio filter tabs, #anchor links) also fires "popstate" and must NEVER reload:
         reloading for it made the whole page disappear and come back every time a filter was clicked.
         The portfolio filter sets window.__keydevHashOnly while it updates the URL, as a second safety net. */
      (function () {
        var lastPage = window.location.pathname + window.location.search;
        window.addEventListener("popstate", function () {
          var page = window.location.pathname + window.location.search;
          var samePage = page === lastPage;
          lastPage = page;
          if (samePage || window.__keydevHashOnly) { return; }
          window.location.reload();
        });
      })();
