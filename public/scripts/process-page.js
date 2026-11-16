/*
 * How we work page: highlights the current step in the sticky navigator, fills its progress bar and
 * scrolls smoothly to a step when its label is clicked. (The navigator's styles expect the classes
 * .active / .read / .reading on .label-item and a width on .indicator.)
 */
$(document).ready(function () {
  var $labels = $('.our-work-process-slider-section .label-item');
  var $rows = $('.our-process-step-row');
  var $bar = $('.our-work-process-slider-section .bar .indicator');
  if (!$labels.length || !$rows.length) return;

  function update() {
    var probe = $(window).scrollTop() + $(window).height() * 0.4;
    var current = -1;
    $rows.each(function (i) {
      if ($(this).offset().top <= probe) current = i;
    });
    $labels.each(function (i) {
      $(this)
        .toggleClass('read', i < current)
        .toggleClass('active', i === current)
        .toggleClass('reading', i === current);
    });
    var pct = current < 0 || $labels.length < 2 ? 0 : (current / ($labels.length - 1)) * 100;
    $bar.css('width', pct + '%');
  }

  $(window).on('scroll resize', update);
  update();

  $labels.find('a').on('click', function (e) {
    var $target = $($(this).attr('href'));
    if (!$target.length) return;
    e.preventDefault();
    $('html, body').animate({ scrollTop: $target.offset().top - 120 }, 500);
  });
});
