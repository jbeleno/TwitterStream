var express = require('express');
var router = express.Router();
var mongoose = require ("mongoose");
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* GET new user. */
router.get('/create', function(req, res, next) {
	var admin = new User ({
		name : 		'Name',
		user: 	 	'User',
		password: 	'Password',
		ip: 		'IP'
	});

	admin.save(function (err) {if (err) console.log ('Error on save!')});

  	res.send('respond with a resource');
});

module.exports = router;
