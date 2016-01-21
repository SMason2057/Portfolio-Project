$(document).ready(function()
{

	// When user clicks on bars, show 
	// navigation menu
	$(".fa-bars").click(function() 
	{

		$(".nav_list").css("display", "block");
		$(".nav_list").slideToggle();

		return false;
	}); 
	
	// End Navigation dropdown menu function

}); 
