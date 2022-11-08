
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
    
 
   

    
    
   
  }(jQuery));
