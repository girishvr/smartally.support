// import Mongoose.js.
const mongoose = require('mongoose');
// imports and binds inbuilt Promise module with the Mongoose.js instance.
mongoose.Promise = global.Promise;

// Schema model.
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },

  email: {
    type: String,
    default: '',
    unique: true
    // required: [
    //   () => {
    //     return (this.phone == undefined);
    //   },
    //   'Please enter email or phone number to register.'
    // ]
  },

  phone: {
    type: String,
    default: '',
    unique: true,
    min: [11, 'Incorrect phone number.'],
    max: [14, 'Incorrect phone number.']
    // required: [
    //   () => {
    //     return (this.email == undefined);
    //   },
    //   'Please enter email or phone number to register.'
    // ]
  }
});

// Model instance.
const user = mongoose.model('users', userSchema);
// Export the user model.
module.exports = user;
