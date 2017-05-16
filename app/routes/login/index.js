// Import the Schema to get the User.
const schema = require('../../models/users');

// Export the request handlers.
module.exports = (request, response) => {
  // Query the username.
  schema.findOne({ username: request.body.username })
  .then((user) => {
    if (!user) { //If user not found.
      return response.json({
        status: 1,
        message: 'User not found.'
      });
    }
    // Else compare passwords.
    const _ = require('./login')(user, request.body.password, response);
  })
  .catch((error) => {
    console.log(error);
    return response.json({catch: error});
  });
}
