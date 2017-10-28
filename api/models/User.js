/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 *
 * :
/** @module User */
//	module.exports = {
//		attributes: {
//			username: {
//				type: 'string',
//				unique: true,
//				index: true,
//				notNull: true
//			},
//			email: {
//				type: 'email',
//				unique: true,
//				index: true
//			},
//			passports: {
//				collection: 'Passport',
//				via: 'user'
//			},
//
//			toJSON: function () {
//				var user = this.toObject();
//				delete user.password;
//				return user;
//			}
//		},
//
//		beforeCreate: function (user, next) {
//			if (_.isEmpty(user.username)) {
//				user.username = user.email;
//			}
//			next();
//		},
//
//		/**
//		 * Register a new User with a passport
//		 */
//		register: function (user) {
//			return new Promise(function (resolve, reject) {
//				sails.services.passport.protocols.local.createUser(user, function (error, created) {
//					if (error) return reject(error);
//
//					resolve(created);
//				});
//			});
//		}
//	};

var _ = require('lodash');
var _super = require('sails-permissions/api/models/User');

_.merge(exports, _super);
_.merge(exports, {
	connection: 'localPostgresql',
  attributes: {
		roles: 'string',
		firstName: 'string',
		lastName: 'string',
		emailList: {
			collection: 'email',
			via: 'owner'
		} 
  }
});

