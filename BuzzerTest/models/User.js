var mongoose = require('mongoose');

// These key:value pairs are written in JSON
// The types used (here, a String) are BSON types (google for more)
// Quotes aren't necessary in mongoose
var User = mongoose.model('User', {
  name: String,
  email: String
});

// This line will allow other js files to require('User')
// Remember to use a proper document-relative path
module.exports = User;