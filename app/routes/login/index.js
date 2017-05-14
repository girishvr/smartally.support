// Import the Schema to get the User.
const userSchema = require('../../models/users');

// Export the request handlers.
module.exports = (request, response) => {
  userSchema.findOne({ username : request.body.username })
  .then((user) => {
    // User not found.
    if (!user) {
      response.json({
        status: 1,
        message: 'User not found.'
      });
    }
    const _ = require('./login')(user, request.body.password, response)
  })
  .catch((error) => {
    response.json({catch: error});
  });
}

/*

response.json({
  status: 0,
  response: 'Success'
});
*/
