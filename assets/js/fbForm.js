$(function(){
	$('#testimony-button, #anonymous-button').on('click', function(){
		console.log("heya");
		$('.testimony-display-1').toggleClass("hide");
		$('.testimony-display-2').toggleClass("hide");
	})

	$('input:checkbox, #read-receipt').change(function(){
		if ($(this).is(':checked'))	{
			$('#button-signin').show()	
		} else {
			$('#button-signin').hide()	
		}
	})
})
