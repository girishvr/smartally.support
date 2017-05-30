// Send push notifications.
const notifier = require('../../push notification');

// Save the job in DB.
module.exports = (job, response) => {
  job.save()
  .then(() => {
    // Send out notifications.
    notifier.push(job._id);
    return response.json({
      status: 0,
      message: 'Job saved.',
      job: job
    });
  })
  .catch((error) => {
    return response.json({
      status: 1,
      message: 'Failed to save the job.'
    });
  });
}
