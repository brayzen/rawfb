$(function(){
	// Stars Thanks to Brian Knapp https://codepen.io/brianknapp/pen/JEotD/
	$('.star.rating').click(function(){
		console.log( $(this).parent().data('stars') + ", " + $(this).data('rating'));
		$(this).parent().attr('data-stars', $(this).data('rating'));
	});
})
