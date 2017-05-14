

// Save the user in the DB.
module.exports = (user, response) => {
  user.save()
  .then(() => {
    response.status(200)
    .json({
      status: 0,
      message: 'Registration complete'
    })
  })
  .catch((error) => {
    const errorMessage = error.code == 11000 ? 'Username taken.' : 'Couldn\'t save user.'
    response.status(400)
    .json({
      status: 1,
      message: errorMessage
    })
  })
}
