/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file handles with collecting tweets
**/

var express = require('express');
var router = express.Router();
var mongoose = require ("mongoose");
var Project = mongoose.model('Project');
var Twitter = require('twitter');


/* GET collect new tweet stream. */
router.get('/collector', function(req, res, next) {

	var userId = process.env.USER_ID;

	// This is a test over this module to collect twitter stream data, based on 
	// location of a test project stored in MongoDB
	Project.findOne({ 'user': userId}, 'location', function (err, project) {

	  	if (err) {
	  		res.json({
  				status: "BAD", 
  				message: "Error: There's a problem in our server, please try later."
	  		});
	  	}else{
	  		if(project){
	  			// Getting the location
	  			var projectLocation = project.location;

	  			if(projectLocation){

	  				// Declare the variables requiered to authenticate the platform with twitter
	  				var client = new Twitter({
	  					consumer_key: process.env.TWITTER_CONSUMER_KEY,
	  					consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	  					access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	  					access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
	  				});

					
					// Stream statuses filtered by location
					// Note: Number of tweets per second depends on topic popularity
					client.stream('statuses/filter', {locations: projectLocation},  function(stream){

					 	stream.on('data', function(tweet) {
					 		console.log(tweet.text);
					 	});

					 	stream.on('error', function(error) {
					 		console.log(error);
					 	});
					});
	  			}

	  		}else{
	  			res.json({
	  				status: "BAD", 
	  				message: "Ups it seems that exist some problems trying to connect to our databases."
	  			});
	  		}
	  	}
	});
});

module.exports = router;