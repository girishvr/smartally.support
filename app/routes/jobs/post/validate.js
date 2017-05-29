// Perform validation upon the job object.
module.exports = (job, response) => {
  job.validate()
  .then(() => {
    const _ = require('./save')(job, response);
  })
  .catch((error) => {
    console.log(error);
    return response.json({
      status: 1,
      message: 'Image link required to initiate job.'
    });
  });
}
