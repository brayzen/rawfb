// Feedback compiler, used as the front end object maker
//

	var ErrorReport = function(passing, msg){
		this.passing = true
		this.msg = msg || ''
	}

  ErrorReport.prototype.throw = function(){
		$('#error-box').val(this.msg)	
	}

	var FeedbackCompiler = function(){
	  this.waysOfBeing = [] 
		this.likableRating = 5 
		this.trustworthyRating = 5
		this.toFirstName = ''
		this.toLastName = ''
		this.toEmail = ''
		this.message = ''
		this.fromFirstName = ''
		this.fromLastName = '' 
		this.fromUserId = null
		this.anonymous = true
		this.errorReport = new ErrorReport
	}

	FeedbackCompiler.prototype.setData = function(){
		this.toFirstName = $('#first-name').val()	
		this.toLastName = $('#last-name').val()	
		this.toEmail = $('#email').val()	
		this.likableRating = $('#rating-likable').val()	
		this.trustworthyRating = $('#rating-trustworthy').val()	
		this.message = $('#message').val()	
		this.fromFirstName= $('#from-first-name').val()
		this.fromLastName = $('#from-last-name').val()
		this.likableRating = $('.star[name=rating-likable]').val()
		this.trustworthyRating = $('.star[name=rating-trustworthy]').val()
	}

	FeedbackCompiler.prototype.valMustHaves = function(){
		if( this.toFirstName === '' || this.toLastName === '' || this.toEmail === '' || this.message === '' ){
			this.errorReport.passing = false
			this.errorReport.msg = 'Entered Improper email address, check and try again'
			this.errorReport.throw()
		}
		return true
	}

	FeedbackCompiler.prototype.validateEmail = function(){
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$"])"]))/
		if (!this.email.test(re)){
			this.errorReport.passing = false	
		} else {
			return false	
		}	
	}

	FeedbackCompiler.prototype.postFbToServer= function(){
		this.valMustHaves()
		this.validateEmail()
		if (this.errorReport.passing){
			io.socket.post('/feedback', this, function(resData, jwRes){
				console.log(jwRes)	
			})	
		};
	}

