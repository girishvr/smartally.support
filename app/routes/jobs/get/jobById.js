// Import the Schema to evaluate upon.
const jobSchema = require('../../../models/jobs');

module.exports = (request, response) => {
  jobSchema.findById(request.query.id)
  .then((job) => {
    if (!job) { // Job not found.
      return response.json({
        status: 1,
        message: 'Job not found,'
      });
    }
    // If the found job has been completed, delete the job.
    if (job.status) {
      deleteJobWith(job._id);
    }

    // Found the job with _id.
    return response.json({
      status: 0,
      message: 'Job found.',
      job: job
    });
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

function deleteJobWith(id) {
  jobSchema.remove({ _id: id }).then().catch();
}
