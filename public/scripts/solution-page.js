/* Solution page behaviour: FAQ list, feature tabs "Show All" button and mobile head toggle. */
$(document).ready(function () {
  /* Tab pickers (.tab_wrapper): start the champ tab plugin once per block.
     Needed by the messaging features section (phone + feature list) and the framework tabs. */
  if ($.fn.champ) {
    $('.tab_wrapper').each(function () {
      if ($(this).data('champ-ready')) return;
      $(this).data('champ-ready', true);
      $(this).champ();
    });
  }

  /* FAQ list: one answer open at a time */
  if ($('.faq-list-wrap').length) {
    $('.faq-list-title a').on('click', function (e) {
      e.preventDefault();
      var target = $(this).attr('href');
      var isOpen = $(this).parent().is('.active');
      $('.faq-list-title').removeClass('active');
      $('.faq-list-item').removeClass('active');
      if (isOpen) {
        $('.faq-list-content:visible').slideUp(300);
      } else {
        $(this).parent().addClass('active');
        $(this).parents('.faq-list-item').addClass('active');
        $('.faq-list-content').slideUp(300).filter(target).slideDown(300);
      }
    });
  }

  /* Key features: Show All / Show Less for the extra tiles */
  $('.key-feeature-show-all-button a').on('click', function (e) {
    e.preventDefault();
    var $btn = $(this);
    $btn.closest('.key-features-main').find('.hide').toggleClass('show');
    $btn.toggleClass('active');
    $btn.text($btn.hasClass('active') ? $btn.data('show-less') : $btn.data('show-all'));
  });

  /* Feature tabs: Show All / Show Less for the active tab */
  if ($('.car-wash-feature-tab-content').length) {
    $('.show-all-button a').on('click', function (e) {
      e.preventDefault();
      var $btn = $(this);
      $btn.closest('.tab-pane').find('.hide').toggleClass('show');
      $btn.toggleClass('active');
      $btn.text($btn.hasClass('active') ? $btn.data('show-less') : $btn.data('show-all'));
    });

    /* Mobile: tapping the tab heading collapses / expands its cards */
    $('.car-wash-feature-tab-content-box').on('click', function () {
      $(this).toggleClass('active');
      $(this).siblings('.service-we-offer-web-inner').slideToggle();
    });
  }
  /* The similar-app case-study slider (social / media & entertainment / fantasy sports pages) is a React
     component now (SimilarAppSlider.tsx); it does not use slick. */
});