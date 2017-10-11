

var BodyRouter = function(){
	this.store = { '/home': $('#body-container').html() };
}

// will check the store for cached html, then fetch if not already loaded
BodyRouter.prototype.fetchAndPrint = function(route, element){
	var _this = this
	if (this.store[route]) {
		$(element).html(this.store[route]);	
	} else {	
		$.get(route, function( resData, jwres){
			var htmlText = resData
			$(element).html(htmlText)	
		  _this.cache(route, htmlText)	
		})
	}
}

BodyRouter.prototype.cache = function(route,  html){
	this.store[route] = html
}

$(function(){
	var bRouter = new BodyRouter()

	$('#logo').click(function(){
		bRouter.fetchAndPrint('/home', '#body-container')
		toggleOverlay()	
	})

	$('#login').click(function(){
		bRouter.fetchAndPrint('/signup', '#body-container')
	})

	$('#mission').click(function(){
		bRouter.fetchAndPrint('/mission', '#body-container')
	})

	$('#about').click(function(){
		bRouter.fetchAndPrint('/about', '#body-container')
	})
})
