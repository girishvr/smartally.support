// import dependencies.
const mongoose = require('mongoose');
const encryptor = require('bcrypt-nodejs');
// imports and binds inbuilt Promise module with the Mongoose.js instance.
mongoose.Promise = global.Promise;

// Schema model.
const UserSchema = new mongoose.Schema({
username: {
    type: String,
    unique: [true, 'This username already exists in the DB.'],
    required: [true, 'Username is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password needs to be at least 6 letters.'],
    maxlength: [16, 'Password needs to be of maximum 16 letters.']
  }
});

// Executes before each UserSchema.save() call.
UserSchema.pre('save', function(next) {
  var user = this;
  // Return if the password hasn't changed.
  if (!user.isModified('password')) return next();
  // Password has changed, so hash it.
  encryptor.genSalt(10, function(error, salt) {
    if (error) return next(error);
    // Hash the password with generated salt.
    encryptor.hash(user.password, salt, null, function(error, hash) {
      if (error) return next(error);
      // Set the hash as the user password.
      user.password = hash;
      next();
    });
  });
});

// Model instance.
const user = mongoose.model('users', UserSchema);
// Export the user model.
module.exports = user;
