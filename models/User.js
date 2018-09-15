const mongoose = require('mongoose');
const { Schema } = require('mongoose');

// Create schema
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// Compile the model using custom schema
mongoose.model('users', UserSchema);