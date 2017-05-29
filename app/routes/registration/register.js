// Save the user in the DB.
module.exports = (user, response) => {
  user.save()
  .then(() => {
    return response.json({
      status: 0,
      message: 'Registration complete'
    });
  })
  .catch((error) => {
    const errorMessage = error.code == 11000 ? 'Username taken.' : 'Couldn\'t save user.'
    return response.json({
      status: 1,
      message: errorMessage
    });
  });
}
