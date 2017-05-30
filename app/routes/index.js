// Get an instance of the Router().
const router = require('express').Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

// Get route handlers.
const jobs = require('./jobs');
const login = require('./login');
const registration = require('./registration');
const uploader = require('./uploader');
const identifierupdator = require('./identifier updator');

// Add routes.
router
.post('/register', registration)
.post('/login', login)
.delete('/job', jobs.delete)
.put('/job', jobs.put)
.get('/job', jobs.get)
.post('/job', jobs.post)
.put('/updateID', identifierupdator)
.post('/upload', multipartMiddleware, uploader.upload);

// Export routes.
module.exports = router;
