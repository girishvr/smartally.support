// Import Jobs Schema to evaluate upon.
const jobSchema = require('../../../models/jobs');

module.exports = (request, response) => {
  jobSchema.remove({ _id: request.query.id })
  .then(() => {
    // Job found and deleted.
    return response.json({
      status: 0,
      message: 'Job removed.'
    });
  })
  .catch((error) => {
    return response.json({
      status: 1,
      message: 'Incorrect \'id\' in query.'
    });
  });
}
