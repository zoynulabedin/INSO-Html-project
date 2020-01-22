

  jQuery(document).ready(function ($) {
    // counter js
      $('span.counter').counterUp({
          delay: 10,
          time: 1000
      });
 
      // owl-carousel 
      $(".inso-service-slider").owlCarousel({
        loop:true,
        margin:10,
        items:3,
        nav:true,
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
