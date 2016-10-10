// custom javascript file

$( document ).ready(function() {

// ===== Scroll to Top Script ==== 
$('#return-to-top').addClass('hideScroller'); // hide on load

$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').addClass('showScroller');
         $('#return-to-top').removeClass('hideScroller');
    } 
});

$('#return-to-top').click(function() {      // When return to top arrow is clicked
    $('body,html').animate({
        scrollTop : 0    // Scroll to top of body
    }, 500);
     $('#return-to-top').removeClass('showScroller'); //remove show
   	 $('#return-to-top').addClass('hideScroller'); // add hide
       
   
});

$(window).scroll(function() { // if page is scrolled to the top
    if ($(this).scrollTop() === 0 ) {    
        $('#return-to-top').removeClass('showScroller');
         $('#return-to-top').addClass('hideScroller');
    } 
});




}); //document.ready