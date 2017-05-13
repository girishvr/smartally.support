// import the Schema for validation and save.
const User = require('../models/users');

module.exports = (request, response) => {
  const user = new User(request.body);
  console.log(user);
  validate(response);
}

function validate(response) {
  user.validate()
  .then(() => {
    save(response);
  })
  .catch((error) => {
    response.status(400)
    .json({
      status: 1,
      message: 'Invalid request.'
    })
  });
}

function save(response) {
  user.save()
  .then(() => {
    response.status(200)
    .json({
      status: 0,
      message: 'Registration complete'
    })
  })
  .catch((error) => {
    response.status(500)
    .json({
      status: 1,
      message: 'Could\'nt register user, please try again in sometime.'
    })
  })
}
