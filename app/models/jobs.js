// Import mongoose to build Schema.
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const jobSchema = new mongoose.Schema({
  imageEp: {
    type: String,
    required: true
  },

  name: {
    type: String,
    default: ''
  },

  amount: {
    type: String,
    default: '0.00'
  },

  date: {
    type: Date,
    default: Date.now()
  },

  status: {
    type: Boolean,
    default: false
  }
});

// Export the jobs model.
module.exports = mongoose.model('jobs', jobSchema);
