/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function (req, res) {
		return res.login({
			successRedirect: '/'	
		})	
	},

	logout: function (req, res) {
		req.logout();
		return res.ok('Logged out successfully.');
	},

	signup: function (req, res) {
		User.create(req.params.all()).exec(function (err, user){
			console.log(user);
			if (err) return res.negotiate(err);
			req.login(user, function (err) {
				if (err) return res.negotiate(err);
				return res.redirect('/welcome');
			})
		})	
	},
	current: function (req, res) {
		console.log(req.session)	
		return res.json(req.session);
	},
	brian: function (req, res) {
		user.findbyid(1).exec(function (err, record) {
			if (err) {
				return sails.log('error:', err)
			}
			
			console.log('user NOW:', record)
			return res.view('user', {user: record[0]});		
		});
	},

	test: function (req, res) {
		var text = req.param('text');
			
		User.findById(1).exec(function (err, record) {
			if (err) {
				return sails.log('Error:', err)
			}
			console.log('text:', text)
			return res.json({record: record[0], text: text});		
		});
	}
};

