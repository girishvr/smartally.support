// import the Schema for validation and save.
const Schema = require('../models/users');

function handler(request, response) {
  // Creates new user.
  const user = new Schema({
    name: request.body.name,
    countryCode: request.body.countryCode,
    phone: request.body.phone,
    email: request.body.email
  });

  user.save((error) => {
    if (error) {
      print(error);
      throw error;
    }

    console.log('Saved user');
    response.status(200).json({message: 'User registered'});
  });
}

module.exports = handler;
