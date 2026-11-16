/* Contact page: file picker label and office map tabs. */
$(document).ready(function () {
  $('#file').on('change', function () {
    $('#subfile').val($(this).val());
  });
  $('#file-trigger').on('click', function (e) {
    e.preventDefault();
    $('#file').trigger('click');
  });

  if ($('.contact-map-main').length) {
    $('.map-tabs-nav a').on('click', function (event) {
      event.preventDefault();
      $('.map-tabs-nav .tab-active').removeClass('tab-active');
      $(this).parent().addClass('tab-active');
      $('.map-tabs-iframe .mapiframe').hide();
      $($(this).attr('href')).show();
    });
  }
});
