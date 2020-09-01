(function($) {
"use strict";

    jQuery(document).ready(function(){
        
      /*-------------------------------------------
      js wow
      --------------------------------------------- */
      new WOW().init();

      /*-------------------------------------------
      js scrollup
      --------------------------------------------- */
      jQuery("#scrollUp").on('click', function() {
        jQuery('html, body').animate({ 'scrollTop': '0' }, 1500,);
        return false;
      });
      
      jQuery(window).scroll(function(){
        if(jQuery(window) .scrollTop() > 150 ){
          jQuery("#scrollUp").fadeIn(500);
        }
        else{
          jQuery("#scrollUp").fadeOut(500);
        }
      });

      /*---------------------------------
      Menu Stick
      -----------------------------------*/
      var header = jQuery('.sticky-bar');
      var win = jQuery(window);
      win.on('scroll', function() {
          var scroll = win.scrollTop();
          if (scroll < 200) {
              header.removeClass('stick');
          } else {
              header.addClass('stick');
          }
      });

      /*---------------------------------
      progress bar active
      -----------------------------------*/
      if($('.skill-list').length){
          $('.skill-list').appear(function(){
              $('#html').LineProgressbar({
                  percentage:95,
              });

              $('#css').LineProgressbar({
                  percentage:80,
              });

              $('#javscript').LineProgressbar({
                  percentage:85,
              });

              $('#angulerjs').LineProgressbar({
                  percentage:75,
              });

              $('#web-desigin').LineProgressbar({
                  percentage:80,
              });

              $('#logo-desigin').LineProgressbar({
                  percentage:65,
              });

              $('#figma').LineProgressbar({
                  percentage:90,
              });

              $('#photoshop').LineProgressbar({
                  percentage:85,
              });
          },{accY: 0});
      };
      
      /*-------------------------------------------
      isotope activation 
      --------------------------------------------- */
      $('container').imagesLoaded(function () {
          // filter items on button click
          $('.filtering-button').on('click', 'a', function () {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
          });
          $('.filtering-button').on('click', 'a', function () {
              $('.filtering-button a').removeClass('active');
              $(this).addClass('active');
          });
          var $grid = $('.grid').isotope({
              itemSelector: '.grid-item',
              percentPosition: true,
              animationOptions: {
                  duration: 500,
                  easing: 'zoom-in'
              },
              masonry: {
                  columnWidth: '.grid-item'
              },
              transitionDuration: '.9s'
          })
      });

      /*-------------------------------------------
      magnificPopup activation 
      --------------------------------------------- */
      $('.image-link').magnificPopup({type:'image'});

      /*-------------------------------------------
      testimonial activation 
      --------------------------------------------- */
      $('.testimonial-slide').slick({
        dots: true,
        arrows: false,
        prevArrow: '<i class="slick-prev slick-arrow fas fa-angle-left"></i>',
        nextArrow: '<i class="slick-next slick-arrow fas fa-angle-right"></i>',
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        vertical: false,
        centerMode: false,
        focusOnSelect: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      



            
    });


    

})(jQuery);