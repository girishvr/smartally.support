// Get an instance of the Router().
const router = require('express').Router();

// Get route handlers.
const jobs = require('./jobs');
const login = require('./login');
const registration = require('./registration');
const uploader = require('./uploader');

// Add routes.
router
.post('/register', registration)
.post('/login', login)
.delete('/job', jobs.delete)
.put('/job', jobs.put)
.get('/job', jobs.get)
.post('/job', jobs.post)
.post('/upload', uploader);

// Export routes.
module.exports = router;
