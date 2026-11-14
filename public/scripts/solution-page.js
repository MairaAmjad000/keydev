/* Solution page behaviour: FAQ list, feature tabs "Show All" button and mobile head toggle. */
$(document).ready(function () {
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
});
