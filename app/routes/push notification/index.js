const admin = require('firebase-admin');
const serviceAccount = require('./privatekey.json');
const Schema = require('../../models/users');
// init app.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://smartally-support.firebaseio.com'
});

exports.push = (jobID) => {
  // Find all device IDs.
  Schema.find()
  .then((users) => {
    const deviceIDs = users
    .map((user) => user.identifier)
    .filter((id) => id !== '');
    sendMessage(deviceIDs, jobID);
  })
  .catch ((error) => {
    console.log('identifiers not found.', error);
  });
}

function sendMessage(identifiers, jobID) {
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
