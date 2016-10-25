// Custom jquery code
$(document).ready(function() {

	// search filter page :: expand/collapse functionality
    $('.container-head').click(function() {
        $(this).toggleClass('showHide');
        $(this).next().toggleClass("hideOptions");  

    });





}); //document.ready