if (process.env.NODE_ENV === 'production') {
  module.exports = { mongoURI: 'mlab server URI goes here'};
} else {
  module.exports = { mongoURI: 'mongodb://localhost:27017/listings-dev'};
}