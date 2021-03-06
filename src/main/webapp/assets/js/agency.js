(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


/*setInterval(function() { changeImage(); }, 10000);
var flag = true;
var changeImage = function(){
  console.log('inside changeImage' + flag);
  if(flag){
    flag = false;
    console.log('inside changeImage cond 1' );
    $("#headerImage").css('background', "url('http://www.cochin1.com/img/header-bg.jpg') no-repeat 0 0"); 
  }else{
    flag = true;
    console.log('inside changeImage cond 2' )
    $("#headerImage").css('background', "url('assets/img/header-bg2.jpg') no-repeat 0 0"); 
  }  
}*/

  // Collapse Navbar
  var navbarCollapse = function() {    
    ($("#headerStyle").attr('value'));
    if ($("#headerStyle").attr('value') === 'home') {
      if (($("#mainNav").offset().top > 100)) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Hide navbar when modals trigger
  $('.portfolio-modal').on('show.bs.modal', function(e) {
    $(".navbar").addClass("d-none");
  })
  $('.portfolio-modal').on('hidden.bs.modal', function(e) {
    $(".navbar").removeClass("d-none");
  })

})(jQuery); // End of use strict
