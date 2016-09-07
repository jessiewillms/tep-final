$(document).ready(function($) {

  // scroll to top of page
  var height,
      destination;

  var nice_scroll_back_to_top = function() {    
    $('html body').animate({
       scrollTop: destination
    }, 500);
  }
  
  $('.js-accordion-toggle').click(function(){

    height = $(this).height();
    destination = $(this).offset().top - height;

    nice_scroll_back_to_top();

    // open/close accordion panel
    $(this).next().addClass('animated fadeIn').slideToggle('slow');
  });

  $('.js-close').on('click', function(){
   
    $(".js-accordion-content").slideUp('slow');

    height = $(this).parent().parent().height();
    destination = $(this).offset().top - height;

    nice_scroll_back_to_top();

  });

  var $window_height = parseInt( $(document).height() );

  // on scroll, update top nav
  $(window).on("scroll resize", function(){

      // get update box
      var   $h2_position = $('#js-update-with-title').offset(),
            title_distance_from_top = parseInt( $('#js-update-with-title').offset().top ),
            percent_through_story = Math.round( (title_distance_from_top / $window_height) * 100 );
      
      $('.progress--inner-wrap').css( 'width', '' + percent_through_story + '%' );

      // loop over all headers
      $('.js-section-title').each(function(){

          if ( $h2_position.top >= $(this).offset().top  ) {
              
              $('#js-update-with-title').html( $(this).text() );
              
              return; //break the loop
          }

      });

  });

  // init the value
  $(window).trigger('scroll'); 

}); // end doc ready

