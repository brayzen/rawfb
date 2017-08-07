/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	brian: function (req, res) {
		User.findById(1).exec(function (err, record) {
			if (err) {
				return sails.log('Error:', err)
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

