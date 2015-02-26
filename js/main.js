// $(".text-swap")


// $('.text-swap').each(function(i, obj) {
//     var $self = $(this);
// 	var detectEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";

//     if($self.css("display") == "none") {
//       $self.addClass("animated fadeIn").css("display", "inline").one(detectEnd, function(){
//       	$self.removeClass("animated fadeIn");
//       	$self.addClass("animated fadeOut").one(detectEnd, function() {
//       		$self.removeClass("animated fadeOut").css("display", "none");
//       	});
//       });
//     }
// });


// $(document).ready(function (){
// 	var animateText = "animated fadeIn";

// 	$(".text-swap").each(function(index) {

// 		$(this).addClass(animateText).css("visibility", "visble");
// 	});
// });


//Loop through each .text-swap

//Add the animation and the visiblity

//Detect when it ends, remove the animation class and the visiblity
// $('#yourElement').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', doSomething);


(function loop() {
  $('.text-swap').each(function() {
    var $self = $(this);
    var detectEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
    $self.parent().queue(function (n) {
      $self.fadeIn(2000).delay(4500).fadeOut(2000, n);
    });
  }).parent().promise().done(loop);
}());


// (function loop() {
//   $('.text-swap').each(function() {
//     var $self = $(this);
//     var animateTextIn = "animated fadeIn";
//     var animateTextOut = "animated fadeOut";
//     var detectEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
//     $self.parent().queue(function (n) {
//       $self.show().addClass(animateTextIn).one(detectEnd, setTimeout(function() {
//    		$self.removeClass(animateTextIn).addClass(animateTextOut)
// }, 6200)).fadeOut(8000, n)
//     });
//   }).parent().promise().done(loop);
// }());



// (function loop() {
//   $('.text-swap').each(function() {
//     var $self = $(this);
//     var detectEnd = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
//     $self.parent().queue(function (n) {
//       $self.addClass("animated shake").css("display", "inline").one(detectEnd, function(){
//       	$self.removeClass("animated shake");
//       	$self.addClass("animated fadeOut").one(detectEnd, function() {
//       		$self.removeClass("animated fadeOut").css("display", "none");
//       	});
//       });
//     });
//   }).parent().promise().done(loop);
// }());