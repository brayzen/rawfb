

var BodyRouter = function(){
	this.currentBody = '';
}

BodyRouter.prototype.fetchAndPrint = function(route, element){
	io.socket.get(route, function( resData, jwres){
		var htmlText = resData
		console.log('htmlTEXT:', htmlText)
		$(element).html(htmlText);	
	})
}


$(function(){
	var bRouter = new BodyRouter()

	$('#login').click(function(){
		console.log('clicked by #login')



		bRouter.fetchAndPrint('/signup', '#form')	
	})
})
