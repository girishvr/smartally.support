// Import Schema to create object with.
const jobSchema = require('../../../models/jobs');

module.exports = (request, response) => {
  // Create a job object.
  const job = new jobSchema(request.body);
  job.date = Date.now();
  // Init validation.
  const _ = require('./validate')(job, response);
}
