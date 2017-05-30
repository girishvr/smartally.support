// User schema.
const Users = require('../../models/users');

module.exports = (user, body, response) => {
  // Check if passwords match.
  user.verify(body.password, (error, matched) => {
    // If some error occurs while processing.
    if (error) return response.json({
      status: 1,
      message: 'Please check the username and password again.'
    });
    // If passwords don't match.
    if (!matched) return response.json({
      status: 1,
      message: 'Incorrect username or password.'
    });
    // If device ID exists in the request update DB.
    if (body.identifier) {
      user.identifier = body.identifier;
      return updateDeviceIdentifiers(user, response);
    }
    // If identifier wasn't found, just login in the user.
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

// Checks if there is any other entry with the mentioned identifier, replace it with '' if it exists.
function updateDeviceIdentifiers(user, response) {
  // Bulk update.
  Users.update({ identifier: user.identifier }, { $set: { identifier: '' }})
  .then(() => {
    return updateUser(user, response)
  })
  .catch ((error) => {
    return updateUser(user, response);
  });
}

function updateUser(user, response) {
  // Set the passed identifier to the selected user.
  Users.update({ _id: user._id }, { $set: { identifier: user.identifier } })
  .then(() => {
    return response.json({
      status: 0,
      message: 'Login successful.',
      user: {
        username: user.username,
        id: user._id
      }
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
