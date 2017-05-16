// Check if passwords match.
module.exports = (user, password, response) => {
  user.verify(password, (error, matched) => {
    // If some error occurs while processing.
    if (error) {
      return response.json({
        status: 1,
        message: 'Please check the username and password again.'
      });
    }

    // If passwords don't match.
    if (!matched) return response.json({
      status: 1,
      message: 'Incorrect username or password.'
    });

    return response.json({
      status: 0,
      message: 'Login successful.',
      user: {
        username: user.username,
        id: user._id
      }
    });
  });
}
