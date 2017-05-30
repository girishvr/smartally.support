const Schema = require('../../models/users');

module.exports = (request, response) => {
  if (!request.body.identifier) {
    return response.json({
      status: 1,
      message: 'Please pass the device identifier token.'
    });
  }

  Schema.findById(request.query.id)
  .then((user) => {
    if (!user) {
      return response.json({
        status: 1,
        message: 'User not found.'
      });
    }
    // Add identifier to user schema.
    user.identifier = request.body.identifier;
    return update(user);
  })
  .catch((error) => {
    return response.json({
      status: 0,
      message: 'Some error occured.',
      error: error
    })
  });
}

function update(user) {
  Schema.update({ _id: user._id }, { $set: { identifier: user.identifier } })
  .then(() => {
    return response.json({
      status: 0,
      message: 'Device ID update.'
    });
  })
  .catch(() => {
    const errorMessage = error.code == 11000 ? 'Username taken.' : 'Couldn\'t save user.'
    return response.json({
      status: 1,
      message: errorMessage
    });
  });
}
