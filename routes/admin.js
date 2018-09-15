const express = require('express');
const mongoose = require('mongoose');

// Set express router
const router = express.Router();

// Load User model
require('../models/User');

const User = mongoose.model('users');

// Set route for /admin
router.get('/', (req, res) => {
  res.send('Welcome to the admin page');
});

// Export router
module.exports = router;