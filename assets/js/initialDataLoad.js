$(function(){
	
	//load waysOfBeing from being index http://url.com/being/
	io.socket.get('/being', function(resData, jwres){

		var waysOfBeing = resData;

		waysOfBeing.forEach(function(wob){
			$('#being-select').append($('<option/>', { value: wob.name, text: wob.name }))
		})

		$('#being-select').prepend($('<option/>', { value: 'undefined', text: '', selected: 'selected'}))

	});	

	$('#login-but').submit(function(e){
		e.preventDefault();
		console.log('e:', e);	
		io.socket.get('/currentUser', function(resData jwres){
			console.warn(resData);	
		})			
	})

	
	
})
