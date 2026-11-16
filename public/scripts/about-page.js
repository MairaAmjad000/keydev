/* Who we are page: history slider (year cards linked to the year strip, via Slick). */
$(document).ready(function () {
  if (!$('.our-history-progress-section').length) return;
  if (!$('.our-history-content-slider').length || !$('.our-history-year-slider').length) return;

  $('.our-history-content-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: false,
    asNavFor: '.our-history-year-slider',
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000
  });

  $('.our-history-year-slider').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    asNavFor: '.our-history-content-slider',
    arrows: false,
    dots: false,
    focusOnSelect: true,
    swipeToSlide: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 991, settings: { slidesToShow: 7 } },
      { breakpoint: 767, settings: { slidesToShow: 6 } },
      { breakpoint: 575, settings: { slidesToShow: 5 } },
      { breakpoint: 479, settings: { slidesToShow: 4 } },
      { breakpoint: 414, settings: { slidesToShow: 3 } },
      { breakpoint: 380, settings: { slidesToShow: 2 } }
    ]
  });
});
