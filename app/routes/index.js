// Get an instance of the Router().
const router = require('express').Router();

// Get route handlers.
const registration = require('./registration');

// Add routes.
router.post('/register', registration);

// Export routes.
module.exports = router;
