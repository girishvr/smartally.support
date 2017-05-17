// Perform validation upon the job object.
module.exports = (job, response) => {
  job.validate()
  .then(() => {
    // Init saving.
    const _ = require('./save')(job, response);
  })
  .catch((error) => {
    return response.json({
      status: 1,
      message: 'Image link required to initiate job.'
    });
  });
}
