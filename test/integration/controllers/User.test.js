const User = require('../../../api/controllers/UserModel');

describe('UserModel', function() {

  describe('#find()', function() {
	    it('should check find function', function (done) {
				User.find()
				.then(function(results) {
		    	assert(typeof(results[0]) === 'object', 'type is an object');
					console.log(results);
					done();
				})
				.catch(done);
				});
			});
 	
});
