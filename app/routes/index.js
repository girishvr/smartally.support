// Get an instance of the Router().
const router = require('express').Router();

// Get route handlers.
const registration = require('./registration');
const login = require('./login');

// Add routes.
router.post('/register', registration)
.post('/login', login);


// Export routes.
module.exports = router;
