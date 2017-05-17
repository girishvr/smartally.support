// Save the job.
module.exports = (job, response) => {
  job.save()
  .then(() => {
    return response.json({
      status: 0,
      message: 'Job completed.'
    });
  })
  .catch((error) => {
    return response.json({
      status: 1,
      message: 'Failed to complete the job.',
      error: error
    });
  });
}
