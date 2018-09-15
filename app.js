const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Load router
const admin = require('./routes/admin');

// DB config
const db = require('./config/db');

// Map global promise
mongoose.Promise = global.Promise;

//Connect to database using mongoose
mongoose.connect(db.mongoURI, {
  useNewUrlParser: true,
})
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log(err));

// Middleware basics
app.use(function(request, response, next) {
  // Do stuff with the request and response
  // When finished, call next() to defer to the next middleware
  console.log(request.method, request.url);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World');
});

// Tell express to use router for certain routes
app.use('/admin', admin);

// Port variable with boolean evaluation
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});