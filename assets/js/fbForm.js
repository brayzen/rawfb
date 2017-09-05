// Feedback form
//
//
$(function(){

	var FeedbackCompiler = function(){
	  this.selectedWaysOfBeing = [] 
		this.likableRating = 5 
		this.trustworthyRating = 5
		this.toFirstName = ''
		this.toLastName = ''
		this.toEmail = ''
		this.message = ''
		this.fromFirstName = ''
		this.fromLastName = '' 
		this.fromUserId = null
	}

	FeedbackCompiler.prototype.setData = function(){
		this.toFirstName = $('#first-name').val()	
		this.toLastName = $('#last-name').val()	
		this.toEmail = $('#email').val()	
		this.likableRating = $('#rating-likable').val()	
		this.trustworthyRating = $('#rating-trustworthy').val()	
		this.message = $('#message').val()	
	}
	
	FeedbackCompiler.prototype.postDataToServer = function(){
		io.socket.post('/feedback', this, function(resData, jwRes){
			console.log(jwRes)	
		})	
	}

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
		if (fb.selectedWaysOfBeing.indexOf(val) > -1)
			return;
		else
			fb.selectedWaysOfBeing.push(val);
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
