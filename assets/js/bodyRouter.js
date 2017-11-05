

var BodyRouter = function(){
	this.store = { '/home': $('#body-container').html() };
}

// will check the store for cached html, then fetch if not already loaded
BodyRouter.prototype.fetchAndPrint = function(route, element){
	var _this = this
	if (this.store[route]) {
		$(element).html(this.store[route]);	
		_this.changeUrl(route)
	} else {	
		_this.fetch(route)
		.then(function(htmlText){
			$(element).html(htmlText)	
			_this.cache(route, htmlText)	
			_this.changeUrl(route)
		})		
	}
}

BodyRouter.prototype.fetch = function(route){
	return new Promise(function(resolve, reject) {
		$.get(route, function(resData, jwres){
			if (jwres === 'success' || jwres === 200) {
				resolve(resData)
			}
		})
	})
}

BodyRouter.prototype.changeUrl = function(route){
	var adjRoute = "/#" + route
	window.location.href = adjRoute
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
		bRouter.fetchAndPrint('/login', '#body-container')
	})

	$('#mission').click(function(){
		bRouter.fetchAndPrint('/mission', '#body-container')
	})

	$('#about').click(function(){
		bRouter.fetchAndPrint('/about', '#body-container')
	})
})
