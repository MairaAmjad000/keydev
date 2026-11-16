/* Client review page: load the Clutch.co widget script only when the page has a Clutch widget. */
$(document).ready(function () {
  if (!$('.clutch-widget').length) return;
  if (document.getElementById('clutch-widget-script')) return;
  var s = document.createElement('script');
  s.id = 'clutch-widget-script';
  s.async = true;
  s.src = 'https://widget.clutch.co/static/js/widget.js';
  document.body.appendChild(s);
});
