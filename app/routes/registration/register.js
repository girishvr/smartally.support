

// Save the user in the DB.
module.exports = (user, response) => {
  user.save()
  .then(() => {
    response.json({
      status: 0,
      message: 'Registration complete',
      user: {
        username: user.username,
        id: user._id
      }
    });
  })
  .catch((error) => {
    const errorMessage = error.code == 11000 ? 'Username taken.' : 'Couldn\'t save user.'
    response.json({
      status: 1,
      message: errorMessage
    });
  });
}
