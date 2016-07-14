$(document).ready(function() {


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

});
