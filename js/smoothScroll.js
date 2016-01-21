$(document).ready(function()
{
	// Creating variable root to hold html and body elements
	var $root = $('html, body'); 
	
	// A function that runs when a link <a> is clicked on
	$('a').click(function()
	{	
		// Animation that causes the page to scroll up or down 
		// starting from the top of page.
		$root.animate({
			scrollTop: $($.attr(this, 'href')).offset().top
			}, 900);
			return false;
	});

}); 