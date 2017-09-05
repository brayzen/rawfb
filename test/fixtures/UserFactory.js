var Faker = require('faker')
var roles = ['user', 'business', 'admin']


class UserFactory {

	static create(num){
		
			for (let i=0; i < num; i++) {
				Email.create({ address: Faker.internet.email() }).exec(function(err, email){
					if (err) {
						sails.log('Error making Email');	
						reject(err)
						return
					}	
					
					User.create({
						role: roles[Math.floor(Math.random() * roles.length)],
						firstName: Faker.name.firstName(),
						lastName: Faker.name.lastName(),
						defaultEmail: email.address
					}).exec(function(err, user){
						if (err) {
							sails.log('Error making User')
							return
						}
					  Email.update({id: email.id}, {owner: user.id}).exec(function(err, updated){
							if (err) {
						    sails.log(err)
								return
							}
						})	
					})
				})
			}
		console.log(`success making ${num} users`);
	}
}

module.exports = exports = UserFactory
