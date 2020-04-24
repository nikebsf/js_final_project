// Accordian Action

$(document).ready(function(){

// Question handler
  $('li.q').on("click", function(){

    // gets next element
    // opens .a of selected question
    $(this).next().slideToggle("500")
    .siblings('li.a').slideUp();
  
    /*// Grab img from clicked question
    var img = $(this).children('img');

    // remove Rotate class from all images except the active
    $('img').not(img).removeClass('rotate');

    // toggle rotate class
    img.toggleClass('rotate');*/

  });

});