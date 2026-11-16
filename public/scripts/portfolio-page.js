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

  $('.portfolio-listing-box .portfolio-listing-icon').on('click', function () {
    var filterValue = $(this).attr('data-filter');
    location.hash = 'filter=' + encodeURIComponent(filterValue);
    $container.isotope({ filter: filterValue });
  });

  var isIsotopeInit = false;
  function onHashchange() {
    var hashFilter = getHashFilter();
    if (!hashFilter && isIsotopeInit) return;
    isIsotopeInit = true;
    $container.imagesLoaded(function () {
      $container.isotope({ itemSelector: '.section', filter: hashFilter || '*' });
      if (hashFilter) {
        $filterButtonGroup.find('.current').removeClass('current');
        $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').parent('.portfolio-listing-box').addClass('current');
      }
    });
  }
  $(window).on('hashchange', onHashchange);
  onHashchange();

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
