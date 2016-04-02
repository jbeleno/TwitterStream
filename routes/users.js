/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file handles with the CRUD module for users in this platform
**/

var express = require('express');
var router = express.Router();
var mongoose = require ("mongoose");
var User = mongoose.model('User');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* POST new user. */
router.post('/create', function(req, res, next) {

	// Setting values for a user
	var admin = new User ({
		name : 		'Name',
		user: 	 	'User',
		password: 	'Password',
		ip: 		'IP'
	});

	// Saving the data in MongoDB
	admin.save(function (err) {if (err) console.log ('Error on save!')});

  	res.json({status: "OK"});
});


/* POST user authentication. */
router.post('/login', function(req, res, next) {

	// If the user is already logged return OK by default, otherwise execute the
	// query to find a match among the username and password in the database
	if(!req.session.idUser){

		// Getting the username and password
		var username = req.body.username;
		var password = req.body.password;

		// Looking for a user with that username and password
		User.findOne({ 'user': username, 'password': password }, 
					'id', function (err, user) {
		  	if (err) {
		  		res.json({
	  				status: "BAD", 
	  				message: "Error: There's a problem in our server, please try later."
		  		});
		  	}else{
		  		if(user){
		  			// Saving the session id, the save function is just necessary
		  			// when the request type is different from GET
		  			console.log("BEFORE: "+req.session.idUser + JSON.stringify(user));
		  			req.session.idUser = user._id;
		  			console.log("AFTER: "+req.session.idUser + JSON.stringify(user));
	      			req.session.save(function(err) {});

		  			res.json({status: "OK"});
		  		}else{
		  			res.json({
		  				status: "BAD", 
		  				message: "Wrong user and/or password, please provide a valid user and password."
		  			});
		  		}
		  	}
		});

	}else{
		res.json({status: "OK"})
	}

});

module.exports = router;
