// Get an instance of the Router().
const router = require('express').Router();

// Get route handlers.
const jobs = require('./jobs');
const login = require('./login');
const registration = require('./registration');

// Add routes.
router
.post('/register', registration)
.post('/login', login)
.get('/job', jobs.get)
.post('/job', jobs.post);

// Export routes.
module.exports = router;
