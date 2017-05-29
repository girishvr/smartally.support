const admin = require('firebase-admin');
const serviceAccount = require('./privatekey.json');
// init app.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://smartally-support.firebaseio.com'
});

exports.push = (identifiers, jobID) => {
  console.log('Inside Notifier \n\n\n\n', identifiers, jobID);
  const payload = {
    notification: {
      title: 'New Job Available',
      body: 'A new job has been added to your account.'
    },

    data: {
      jobID: jobID.toString()
    }
  };

  admin.messaging()
  .sendToDevice(identifiers, payload)
  .then((handler) => {
    console.log('Notification sent.', handler);
  })
  .catch ((error) => {
    console.log('Notification not sent.', error);
  });
}
