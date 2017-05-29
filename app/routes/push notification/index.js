const admin = require('firebase-admin');
const serviceAccount = require('./privatekey.json');
// init app.
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://smartally-support.firebaseio.com'
});

exports.push = (identifiers, jobID) => {
  const payLoad = {
    notification: {
      title: 'New Job Available',
      body: 'A new job has been added to your account.'
    },

    data: {
      jobID: jobID
    }
  };

  admin.messaging()
  .sendToDevice(identifiers, payLoad)
  .then((handler) => {
    console.log('Notification sent.', handler);
  })
  .catch ((error) => {
    console.log('Notification not sent.', error);
  });
}
