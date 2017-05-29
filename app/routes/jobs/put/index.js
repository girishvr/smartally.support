// Import the Schema to evaluate upon.
const jobSchema = require('../../../models/jobs');

module.exports = (request, response) => {
  jobSchema.findById(request.query.id)
  .then((job) => {
    // If job not found.
    if (!job) {
      return response.json({
        status: 1,
        message: 'Job not found.'
      });
    }
    // If job is found.
    // In case of user trying update an already completed job.
    if (job.status == true) {
      return response.json({
        status: 1,
        message: 'Job already completed.'
      });
    }
    // Else validate the request.
    return require('./validate')(job, request, response);
  })
  .catch((error) => {
    console.log(error);
    return response.json({
      status: 1,
      message: 'Some internal error occured.',
      error: error
    });
  });
}
