$(document).ready(function()
{
	// Opens lightbox when clicking on an image
	$(".lightbox_trigger").click(function(e)
	{
		var image_href = $(this).attr("src");
		var imgLength = $(".lightbox_trigger").length;
		var caption = $("<p>This is an image.</p>");
		var index = 0;
		console.log(imgLength);
		e.preventDefault();
		
		$(".fa fa-times-circle-o").addClass("fa fa-times-circle-o");
		
		if($("#lightbox").length > 0)
		{
			$("#content").html('<img src=" + image_href + "/>');
			$("#lightbox").show();
		}

		else 
		{
			var  lightbox = "<div id='lightbox'>" + 
				// '<i class="fa fa-times-circle-o"></i>' + 
				'<div id="content">' + 
				'<i class="fa fa-chevron-left"></i>'+
					'<img src="' + image_href +'">' + 
					'<i class="fa fa-chevron-right"></i>'
				'</div>' + 
			'</div>';

			$('body').prepend(lightbox);
			$('#content').append(caption);
		} 
	});

}); 
