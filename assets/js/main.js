

  jQuery(document).ready(function ($) {
    // counter js
      $('span.counter').counterUp({
          delay: 10,
          time: 1000
      });
 
      // owl-carousel 
      $(".inso-service-slider").owlCarousel({
        loop:true,
        margin:20,
        items:3,
        autoplay:true,
        nav:true,
        dots:true,
        navText:["<div class='slider-arrow slider-arrow-left'><i class='fa fa-arrow-left'></i></div>","<div class='slider-arrow slider-arrow-right'><i class='fa fa-arrow-right'></i></div>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:3
            }
    }
      });
      //Menu
      $(".mobile-menu").click(function () {
          $(".main-menu").slideToggle(400);

      });
     

      jQuery(window).resize(function () {
          var screenwidth = jQuery(window).width();
          if (screenwidth > 767) {
              jQuery(".main-menu").removeAttr("style");
          }
      });



      //       scroll_top   
      $(window).scroll(function () {
          if ($(this).scrollTop()) {
              $('#toTop').fadeIn();
              $('.header-top').addClass('stiky');
          } else {
              $('#toTop').fadeOut();
              $('.header_area').removeClass('stiky');
          }
      });

      // $("#toTop").click(function () {
      //     $("html, body").animate({
      //         scrollTop: 0
      //     }, 1000);
      // });





  });
