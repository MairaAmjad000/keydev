/* Blog index: "Load More" reveals the next batch of hidden articles. */
$(document).ready(function () {
  var $list = $('#blog-list');
  if (!$list.length) return;
  var size = parseInt($list.attr('data-page-size'), 10) || 6;
  $('#loadmore').on('click', function (e) {
    e.preventDefault();
    var $hidden = $list.find('.blog-list-more.d-none');
    $hidden.slice(0, size).removeClass('d-none');
    if ($list.find('.blog-list-more.d-none').length === 0) $(this).closest('.container').hide();
  });
});
