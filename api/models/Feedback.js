/**
 * Feedback.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'localPostgresql',
  attributes: {
		to: {
			_user: { model: 'user' },
			firstName: { type: 'string' },
			lastName: { type: 'string' }
		},
		from: {
			_user: { model: 'user' },
			firstName: { type: 'string' },
			lastName: { type: 'string' }
		},
		anonymous: { type: 'boolean' },
		message: { type: 'text' },
		ratings: { type: 'array' },
		userQuestions: { type: 'array' },
		read: { type: 'boolean' },
		flagged: { type: 'boolean' },
  }
};

