

var BodyRouter = function(){
	this.currentBody = '';
}

BodyRouter.prototype.fetchAndPrint = function(route, element){
	$.get(route, function( resData, jwres){
		var htmlText = resData
		$(element).html(htmlText);	
	})
}

$(function(){
	var bRouter = new BodyRouter()

	$('#login').click(function(){
		bRouter.fetchAndPrint('/signup', '#form')
	})

	$('#mission').click(function(){
		bRouter.fetchAndPrint('/mission', '#form')
	})

	$('#about').click(function(){
		bRouter.fetchAndPrint('/about', '#form')
	})
})
