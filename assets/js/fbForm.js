// Feedback form
//
//
$(function(){
	
	// made from Feedback compiler which should have been loaded ahead of fbFrom.js
	var fb = new FeedbackCompiler()	

	// Button to toggle anonymity
	$('#testimony-button, #anonymous-button').on('click', function(){
		console.log("heya");
		$('.testimony-display-1').toggleClass("hide");
		$('.testimony-display-2').toggleClass("hide");
	})

	// Read Reciept hide/show for signin button
	$('input:checkbox, #read-receipt').change(function(){
		if ($(this).is(':checked'))	{
			$('#button-signin').show()	
		} else {
			$('#button-signin').hide()	
		}
	})

	//Being selection added to box
	$('select#being-select').change(function(){
		var val = $(this).val();	
		if (fb.waysOfBeing.indexOf(val) > -1)
			return;
		else
			fb.waysOfBeing.push(val);
		console.log(val);
		$('.being-box').append('<div class="being-square">'+ val + '</div>');	
	})

	//Submit button send off
	$('#button-submit').click(function(){
		fb.setData();
		console.log(fb);	
		fb.postDataToServer();

	})

})
