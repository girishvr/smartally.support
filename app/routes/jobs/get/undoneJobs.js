// Import the Schema to evaluate upon.
const jobSchema = require('../../../models/jobs');

module.exports = (request, response) => {
  // Get the time greater than thirty mins ago.
  const now = new Date();
  var thirtyMinsAgo = new Date ();
  thirtyMinsAgo.setMinutes(thirtyMinsAgo.getMinutes() - 30);
  // Set query.
  jobSchema.find({
     date: {
       $gte: thirtyMinsAgo,
       $lte: now
     },

     status: false
   })
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
