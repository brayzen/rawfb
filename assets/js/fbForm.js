// Feedback form
//
//
//

function clearForm(){
		$('#first-name').val('')	
		$('#last-name').val('')	
		$('#email').val('')	
		$('#message').val('')	
		$('#from-first-name').val('')
		$('#from-last-name').val('')
		$('#from-first-name').val('')
		$('#from-last-name').val('')
		$('.stars[name="rating-likable"]').data('stars', 5)
		$('.stars[name="rating-trustworthy"]').data('stars', 5)
	}

$(function(){
	
	// made from Feedback compiler which should have been loaded ahead of fbFrom.js
	var fb = new FeedbackCompiler()	

	// Stars Thanks to Brian Knapp https://codepen.io/brianknapp/pen/JEotD/
	$('.star.rating').click(function(){
		$(this).parent().attr('data-stars', $(this).data('rating'));
	});

///////////////////////////////////////////////f
///////////////////////////////////////////////f
///////////////////////////////////////////////f

						$('#button-fakeData').click(function(){
								$('#first-name').val('test')	
								$('#last-name').val('tester')	
								$('#email').val('test@example.com')	
								$('#message').val('This is your message')	
								$('#from-first-name').val('bob')
								$('#from-last-name').val('sender')
								$('.stars[name="rating-likable"]').data('stars', 4)
								$('.stars[name="rating-trustworthy"]').data('stars', 3)
						})	


///////////////////////////////////////////////f
///////////////////////////////////////////////f
///////////////////////////////////////////////f

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
			fb.waysOfBeing.push(val)
		$('.being-box').append('<div class="being-square">'+ val + '</div>');	
	})

	//Submit button send off
	$('#button-submit').click(function(){
		fb.setData()
		fb.validateAll()
		fb.postFbToServer(clearForm)
	})
})
