var detectEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
var animateMouse = "animated pulse";
var animateClick = "animated swing";

$(document).ready(function(){

	// Social icon animations
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


	// Popover
	$("#more-hci").popover("hide");
	$('body').on('click', function (e) {
	    $('[data-toggle="popover"]').each(function () {
	        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	            $(this).popover('hide');
	        }
	    });
	});
});

// Text swap
(function loop() {
  $('.text-swap').each(function() {
	var $self = $(this);
    $self.parent().queue(function (n) {
      $self.fadeIn(1000).delay(3800).fadeOut(1000, n);
    });
  }).parent().promise().done(loop);
}());

