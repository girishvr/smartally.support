// Get an instance of the Router().
const router = require('express').Router();

// Get route handlers.
const login = require('./login');
const registration = require('./registration');

// Add routes.
router.post('/register', registration).post('/login', login);

// Export routes.
module.exports = router;
