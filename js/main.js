(function loop() {
  $('.text-swap').each(function() {
    var $self = $(this);
    var detectEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $self.parent().queue(function (n) {
      $self.fadeIn(2000).delay(4500).fadeOut(2000, n);
    });
  }).parent().promise().done(loop);
}());
