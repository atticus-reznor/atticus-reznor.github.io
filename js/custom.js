/*custom*/
	/*
$(document).ready(function($){

	$('.background').hover(
		function () {
			$(this).animate({opacity:'1'});
		},
		function () {
			$(this).animate({opacity:'0'});
		}
	);	
});*/
$(document).ready(function () {
  'use strict';
  
  var orientationChange = function () {
    var $element = $('.section-photo, .section-video, .section-music, .section-main');
    $element.css('height', '116vh'); // Change this to your own original vh value.
    $element.css('height', $element.height() + 'px');
  };

  var s = screen;
  var o = s.orientation || s.msOrientation || s.mozOrientation;
  o.addEventListener('change', function () {
    setTimeout(function () {
      orientationChange();
    }, 250);
  }, false);
  orientationChange();
    
    
});