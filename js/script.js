 $(document).ready(function () {
     //waypoint
    $('.section-photo').waypoint(function (direction)
    {if (direction === "down") {$('nav').addClass('sticky'); } else { $('nav').removeClass('sticky'); } }, 
    {offset: '40px;'});
     
     /*$('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})*/
     

	$('.background').hover(
		function () {
			$(this).animate({opacity:'1'});
		},
		function () {
			$(this).animate({opacity:'0'});
		});
     
     // Add smooth scrolling
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
     
     //animated fade in
$('.music-showcase').waypoint(function (direction) {
    $('.music-showcase').addClass('animated fadeIn');
}, {
    offset: '50%'
});
     
$('.music-showcase2').waypoint(function (direction) {
    $('.music-showcase2').addClass('animated fadeIn');
}, {
    offset: '50%'
});
     
$('.photo-showcase').waypoint(function (direction) {
    $('.photo-showcase').addClass('animated fadeIn');
}, {
    offset: '50%'
});
     
$('.video-showcase').waypoint(function (direction) {
    $('.video-showcase').addClass('animated fadeIn');
}, {
    offset: '50%'
});
     
$('.logo-small').waypoint(function (direction) {
    $('.logo-small').addClass('animated fadeIn');
}, {
    offset: '50%'
});
     
$('.logo').waypoint(function (direction) {
    $('.logo').addClass('animated fadeIn');
}, {
    offset: '50%'
});
     
    
       
});