var express = require('express');
var User = require('../models/User');
var router = express.Router();

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BuzzerTest');

/* GET home page. Express made this*/
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/* POST register. Tim made this */
router.post('/register', function(req, res) {
  var user = new User({
    name: req.body.name,  // Takes the value from the element with the name "name"
    email: req.body.email,  // Takes the value from the element with the name "email"
  });
  user.save(function(err) {  // Mongoose function to save data
    if (err) {console.log('Error registering user: ',err);}
    res.render('members', { title: 'Members Home'});
  });
});

// This line exports the router variable
// In case any other file wants to require('router');
module.exports = router;