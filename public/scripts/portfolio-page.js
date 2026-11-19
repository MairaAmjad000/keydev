/* Portfolio page: Isotope filter (with #filter=... in the URL) and the smart-scroll behaviour. */
$(document).ready(function () {
  if (!$('.portfolio-preview-wrap').length) return;

  var $bar = $('.portfolio-listing-section');
  /* show the filter bar even if the window load event already fired */
  function showBar() { $bar.addClass('active'); }
  showBar();
  $(window).on('load', showBar);

  function getHashFilter() {
    var matches = location.hash.match(/filter=([^&]+)/i);
    var hashFilter = matches && matches[1];
    return hashFilter && decodeURIComponent(hashFilter);
  }

  var $filterButtonGroup = $('.portfolio-listing-section .d-flex');
  var $container = $('.isotop');
  var currentFilter = getHashFilter() || '*';

  function markCurrent(filterValue) {
    $filterButtonGroup.find('.current').removeClass('current');
    $filterButtonGroup
      .find('.portfolio-listing-icon')
      .filter(function () { return $(this).attr('data-filter') === filterValue; })
      .parent('.portfolio-listing-box')
      .addClass('current');
  }

  /* Initialise Isotope ONCE, already filtered, with no fade/scale animation, so nothing flashes or disappears. */
  $container.isotope({
    itemSelector: '.section',
    filter: currentFilter,
    transitionDuration: 0,
    hiddenStyle: { opacity: 0 },
    visibleStyle: { opacity: 1 }
  });
  markCurrent(currentFilter);

  /* Re-layout (not re-init) once images have loaded, since they change the row heights. */
  $container.imagesLoaded(function () { $container.isotope('layout'); });

  function applyFilter(filterValue) {
    if (filterValue === currentFilter) return;
    currentFilter = filterValue;
    markCurrent(filterValue);
    $container.isotope({ filter: filterValue });
  }

  $('.portfolio-listing-box .portfolio-listing-icon').on('click', function (e) {
    /* a filter tab is never a navigation: no default action, no bubbling to site-wide link/anchor handlers */
    e.preventDefault();
    e.stopPropagation();
    var filterValue = $(this).attr('data-filter');
    window.__keydevHashOnly = true;
    setTimeout(function () { window.__keydevHashOnly = false; }, 300);
    /* replaceState updates the URL without firing hashchange, so the list is filtered exactly once */
    var newHash = '#filter=' + encodeURIComponent(filterValue);
    if (window.history && history.replaceState) {
      history.replaceState(history.state, '', location.pathname + location.search + newHash);
    } else {
      location.hash = newHash;
    }
    applyFilter(filterValue);
  });

  /* back/forward buttons or a manually edited #filter=... */
  $(window).on('hashchange', function () {
    applyFilter(getHashFilter() || '*');
  });

  var ee = new EventEmitter();
  if ($.smartscroll) {
    $.smartscroll({
      sectionWrapperSelector: '.portfolio-preview-wrap',
      sectionClass: 'section',
      dynamicHeight: true,
      sectionScroll: false,
      autoHash: false,
      eventEmitter: ee,
      breakpoint: 1024
    });
  }
});
