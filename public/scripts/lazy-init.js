
        $(function() {
            $('.lazy').Lazy();
        });

      /* Reload on back/forward only when the page itself changes (path or query string).
         A hash-only change (portfolio filter tabs, #anchor links) also fires "popstate"; reloading
         for it made the whole page disappear and come back every time a filter was clicked. */
      (function () {
        var lastPage = window.location.pathname + window.location.search;
        window.addEventListener("popstate", function () {
          var page = window.location.pathname + window.location.search;
          if (page !== lastPage) { window.location.reload(); }
          lastPage = page;
        });
      })();
