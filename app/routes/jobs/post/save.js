// Send push notifications.
const notifier = require('../../push notification');
const ocr = require('../../../ocr');

// Save the job in DB.
module.exports = (job, response) => {
  job.save()
  .then(() => {
    // Send out notifications.
    notifier.push(job._id);
    // OCR.
    ocr.ocr(job.imageEp);
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
