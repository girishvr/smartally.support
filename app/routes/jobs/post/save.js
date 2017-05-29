// Schema.
const Schema = require('../../../models/users');
// Send push notifications.
const notifier = require('../../push notification');

// Save the job in DB.
module.exports = (job, response) => {
  job.save()
  .then(() => {
    pushNotifications(job._id);
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

// Post notification.
function pushNotifications(jobID) {
  Schema.find()
  .then((users) => {
    const deviceIDs = users
    .map((user) => user.identifier)
    .filter((id) => id !== '');
    notifier.push(deviceIDs, jobID);
  }).catch ();
}
