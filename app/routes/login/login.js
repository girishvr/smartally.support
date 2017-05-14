// Check if passwords match.
module.exports = (user, password, response) => {
  user.verify(password, (error, matched) => {
    console.log(error, matched);

    if (error) {
      return response.json({
        status: 1,
        message: 'Some error occured.'
      });
    }

    if (!matched) return response.json({
      status: 1,
      message: 'Incorrect username or password.'
    });
    response.json({
      status: 0,
      response: 'Success.'
    });
  });
}
