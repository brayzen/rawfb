/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'localPostgresql',
  attributes: {
		roles: 'string',
		firstName: 'string',
		lastName: 'string',
		defaultEmail: 'string',
		emails: {
			collection: 'email',
			via: 'owner'
		} 
  }
};

