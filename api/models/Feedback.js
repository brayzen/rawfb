/**
 * Feedback.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'localPostgresql',
  attributes: {
		_toUser: { model: 'user' },
		toFirstName: { type: 'string' },
		toLastName: { type: 'string' },
		_fromUser: { model: 'user' },
		fromFirstName: { type: 'string' },
		fromLastName: { type: 'string' },
		anonymous: { type: 'boolean', defaultsTo: true },
		message: { type: 'text' },
		ratings: { type: 'array' },
		userQuestions: { type: 'array' },
		read: { type: 'boolean' },
		flagged: { type: 'boolean' },
		waysOfBeing: {type: 'array'}
  }
};

