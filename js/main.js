var detectEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
var animateMouse = 'animated pulse';
var animateClick = 'animated swing';

$(document).ready(function(){

	//
	// Social icon animations
	//

	$('.social-media').on('mouseover', function (){
		$(this).addClass(animateMouse);
	});
	$('.social-media').on('mouseout', function (){
		$(this).removeClass(animateMouse);
	});
	// Removes the animation class when it's done animating
	$('.social-media').click(function (){
		$(this).addClass(animateClick).one(detectEnd, function(){
			$(this).removeClass(animateClick);
		});
	});

	//
	// Popover
	//

	// Init popover
	$('#more-hci').popover({
		viewport: '.container'
	});

	// Hide on click outside
	$('body').on('click', function (e) {
	    $('[data-toggle="popover"]').each(function () {
	        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
	            $(this).popover('hide');
	        }
	    });
	});
	// // Change popover placement depending on screen size
	// var $window = $(window);
	// function checkWidth() {
	// 	var windowsize = $window.width();
	// 	if (windowsize < 768) {
	// 		$('#more-hci').attr('data-placement','bottom');
	// 	}
	// 	else {
	// 		$('#more-hci').attr('data-placement','right');
	// 	}
	// }
	// checkWidth();
	// $window.resize(checkWidth);
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

