 $(document).ready(function () {
     /*waypoint*/
    $('.section-photo').waypoint(function (direction)
    {if (direction === "down") {$('nav').addClass('sticky'); } else { $('nav').removeClass('sticky'); } }, 
    {offset: '40px;'});
     
     /*var waypoints = $('#handler-first').waypoint(function(direction) {
  notify(this.element.id + ' hit 25% from top of window') 
}, {
  offset: '25%'
})*/
     
     
     /*smooth scroll*/
function filterPath(string) {
  return string
    .replace(/^\//, '')
    .replace(/(index|default).[a-zA-Z]{3,4}$/, '')
    .replace(/\/$/, '');
}

var locationPath = filterPath(location.pathname);
$('a[href*="#"]').each(function () {
  var thisPath = filterPath(this.pathname) || locationPath;
  var hash = this.hash;
  if ($("#" + hash.replace(/#/, '')).length) {
    if (locationPath === thisPath && (location.hostname == this.hostname || !this.hostname) && this.hash.replace(/#/, '')) {
      var $target = $(hash), target = this.hash;
      if (target) {
        $(this).click(function (event) {
          event.preventDefault();
          $('html, body').animate({scrollTop: $target.offset().top}, 1000, function () {
            location.hash = target; 
            $target.focus();
            if ($target.is(":focus")){ //checking if the target was focused
              return false;
            }else{
              $target.attr('tabindex','-1'); //Adding tabindex for elements not focusable
              $target.focus(); //Setting focus
            };
          });       
        });
      }
    }
  }
});
     
     /*animated fade in*/
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
}, {offset: '50%'
});
     
    
       
});