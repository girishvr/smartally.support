const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Users', new Schema({
  name: String,

  countryCode: {
    type: String,
    required: () => {
      return (this.email === '');
    }
  },

  phone: {
    type: String,
    min: [10, 'Phone number should be 10 digits only.'],
    max: [10, 'Phone number should be 10 digits only.'],
    required: () => {
      return (this.email === '');
    }
  },

  email: {
    type: String,
    required: () => {
      return (this.phone === '');
    }
  }
}));
