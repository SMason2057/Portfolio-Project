$(document).ready(function()
{
	// Navigation - dropdown menu 
	$(".fa-bars").click(function() 
	{
		$(".nav_list").slideToggle();
		return false;
	}); 
	
	// Smooth scrolling
	var $root = $('html, body'); 
	$('a').click(function()
	{
		$root.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
			}, 900);
			return false;
			
	
	});

}); 
// http://mayflowerscha.com/wp-content/uploads/2014/11/sweetpeas-bouquet-m.jpg

// http://theversed.com/wp-content/uploads/2013/01/Beyonce2.jpg