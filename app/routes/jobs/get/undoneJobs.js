// Import the Schema to evaluate upon.
const jobSchema = require('../../../models/jobs');

module.exports = (request, response) => {
  jobSchema.find({ status: false }) // Set query.
  .limit(10)
  .sort({ date: 'descending' })
  .then((jobs) => {
    // If no jobs available.
    if (!jobs) {
      return response.json({
        status: 1,
        message: 'No jobs in last half hour.'
      });
    }
    // Else return jobs.
    return response.json({
      status: 0,
      message: 'Jobs found',
      jobs: jobs
    });
  })
  .catch((error) => {
    return response.json({
      status: 1,
      message: 'Some internal error occured.',
      error: error
    });
  });
}
