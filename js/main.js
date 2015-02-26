var detectEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

var animateMouse = "animated pulse";
var animateClick = "animated swing";

$(document).ready(function(){
	$(".social-media").on("mouseover", function (){
		$(this).addClass(animateMouse);
	});
	$(".social-media").on("mouseout", function (){
		$(this).removeClass(animateMouse);
	});
	$(".social-media").click(function (){
		$(this).addClass(animateClick).one(detectEnd, function(){
			$(this).removeClass(animateClick);
		});
	});
});

(function loop() {
  $('.text-swap').each(function() {
	var $self = $(this);
    $self.parent().queue(function (n) {
      $self.fadeIn(2000).delay(4500).fadeOut(2000, n);
    });
  }).parent().promise().done(loop);
}());

