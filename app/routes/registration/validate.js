// Validate the users request.
module.exports = (user, response) => {
  user.validate()
  .then(() => {
    const _ = require('./register')(user, response);
  })
  .catch((error) => {
    const errorMessage = error.errors.username ? error.errors.username.message : error.errors.password.message;
    response.json({
      status: 1,
      message: errorMessage
    });
  });
}
