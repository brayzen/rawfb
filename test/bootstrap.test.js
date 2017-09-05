var sails = require('sails');
var UserFactory = require('./fixtures/UserFactory');
var FeedbackFactory = require('./fixtures/FeedbackFactory');

before(function(done) {
	 sails.log('hello AILS ERROR yo');
// Increase the Mocha timeout so that Sails has enough time to lift.
   this.timeout(5000);

	 sails.lift({
		// configuration for testing purposes
		 environment: 'test',
		 log: {
			 level: 'error'
		 },
		 connections: {
			 test: {
				 adapter: 'sails-memory'
			 }
		 },
		 models: {
			 connection: 'test'
		 },
		 port: 98765
	 }, 
		
	function(err){
		if (err) return done(err);
			UserFactory.create(20).exec(function(err, arr){
				console.log(arr);		
				done(err, sails);
			})
			// here you can load fixtures, etc.
	 }
	});
})

after(function(done) {
	// here you can clear fixtures, etc.
	sails.lower(done);
})
