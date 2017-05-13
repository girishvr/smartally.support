// Import the DB model (Schema).
const users = require('../models/users');

module.exports = (request, response) => {
  // Get body parameters from request.
  const email = request.body.email;
  const phone = request.body.phone;

  console.log(email, phone);
  console.log('1');

  // See if email is present in the body.
  if (email !== undefined) {
    console.log('2');
    useEmail(email, response);
    return;
  }

  // Else see if phone is present.
  if (phone !== undefined) {
    console.log('3');
    usePhone(phone, response);
    return;
  }

  console.log('4');
  // Else the required parameters are absent.
  response
  .status(400)
  .json({
    status: 1,
    message: 'Require the email or phone number to login.'
   });
}

function useEmail(_email, response) {
  users.findOne({email : _email})
  .then((user) => {
    // If no user found.
    if (user === undefined) {
      response.status(400).json({
        status: 1,
        message: 'Could\'nt find user.'
      })
    }
    // Return user.
    response.status(200).json({
      status: 0,
      response: user
    });
  })
  .catch((error) => {
    response.status(500).json({
      status: 1,
      message: 'Could\'nt get user, please try again in sometime.'
    })
  })
}

function usePhone(_phone, response) {
  users.findOne({phone : _phone})
  .then((user) => {
    // If no user found.
    if (user === undefined) {
      response.status(400).json({
        status: 1,
        message: 'Could\'nt find user.'
      })
    }
    // Return user.
    response.status(200).json({
      status: 0,
      response: user
    });
  })
  .catch((error) => {
    response.status(500).json({
      status: 1,
      message: 'Could\'nt get user, please try again in sometime.'
    })
  })
}
