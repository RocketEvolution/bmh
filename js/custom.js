$(document).ready(function() {

	// SCROLLED
	$(window).scroll(function() {
		$('.header').toggleClass('header-scrolled', $(this).scrollTop() > 50);
	});


	// RESPONSIVE MENU
	$('.responsive-navbtn').click(function() {
		$('#responsivemenu').addClass('responsivemenu-clicked');
	});
	$('#responsivemenubutton').click(function() {
		$('#responsivemenu').removeClass('responsivemenu-clicked');
	});


	// BACK TO TOP
	/*
	$('#totop').click(function() {
		$('html, body').animate({'scrollTop': '0px'}, 1000);
		return false;
	});
	*/


});