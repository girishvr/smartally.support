// import the Schema for validation and save.
const User = require('../../models/users');

module.exports = (request, response) => {
  const user = new User(request.body);
  console.log(user);
  // Start validation.
  const _ = require('./validate')(user, response);
}
