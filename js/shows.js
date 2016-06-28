$(document).ready(function() {

var el = document.querySelector('body');
el.innerHTML = el.innerHTML.replace(/&nbsp;/g,'');

jQuery(function($){
    	     $( '.menu-btn' ).click(function(){
    	     $('.responsive-menu').slideToggle('expand')
    	     });
        });

});
