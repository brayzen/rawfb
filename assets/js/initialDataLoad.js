$(function(){
	
	//load waysOfBeing from being index http://url.com/being/
	io.socket.get('/being', function(resData, jwres){

		var waysOfBeing = resData;

		waysOfBeing.forEach(function(wob){
			$('#being-select').append($('<option/>', { value: wob.name, text: wob.name }))
		})

		$('#being-select').prepend($('<option/>', { value: 'undefined', text: '', selected: 'selected'}))

	});	
	
})
