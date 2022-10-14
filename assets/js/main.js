
  (function($) {
    'use strict';
  
    // App Navar
    $(document).on('click', '.menu-toggle' , function() {
      $('nav').toggleClass('active');
      $('body').css('overflow-y', 'hidden')
    });
    $(document).on('click', '#closeBtn' , function() {
    
      $('.menu-toggle').trigger("click");
      $('body').css('overflow-y', '')
    });

    //App Sliders

    //Tips
    
    if($(window).width() < 991 ){
     

      $('.categories-slider').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
           
             
            }
          }],
        prevArrow:"<button class='slider-prev'><i class='fa-regular fa-chevron-left'></i></button>",
        nextArrow:"<button class='slider-next'><i class='fa-regular fa-chevron-right'></i></button>"
      });
    }
    else{
      $('.categories-slider').addClass('noCarousel row');
      $('.categories-slider').children('.item-cat').css('width', '20%')
    }

        
    $(document).ready(function(){
  
      $(".Modern-Slider").slick({
        autoplay:true,
        autoplaySpeed:10000,
        speed:600,
        slidesToShow:1,
        slidesToScroll:1,
        pauseOnHover:false,
        dots:true,
        pauseOnDotsHover:true,
        cssEase:'linear',
       // fade:true,
        draggable:false,
        prevArrow:'<button class="PrevArrow"></button>',
        nextArrow:'<button class="NextArrow"></button>', 
        responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              prevArrow:null,
              nextArrow:null
             
            }
          }],
      });
      
    });

    
    
   
  }(jQuery));
