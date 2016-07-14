$(document).ready(function() {

var el = document.querySelector('body');
el.innerHTML = el.innerHTML.replace(/&nbsp;/g,'');




jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').slideToggle('expand')
    	     });
        });


$(window).resize(function() {
	if (window.innerWidth > 768) {
		$('.responsive-menu').show();
	} else {
		$('.responsive-menu').hide();
	}
});



/* I'd like to add something to HIDE nav menu when resized to mobile view */

});


