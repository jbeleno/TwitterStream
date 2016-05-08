/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file handles with the CRUD module for projects in this platform
**/

var express = require('express');
var router = express.Router();
var mongoose = require ("mongoose");
var Project = mongoose.model('Project');


/* POST new project. */
router.post('/create', function(req, res, next) {

	// Data inicialization
	var projectData = {};

	// Getting the project data
	var name = req.body.name;
	var follow = req.body.follow;
	var track = req.body.track;
	var languages = req.body.languages;
	var count = req.body.count;
	var start_date = req.body.start_date;
	var finish_date = req.body.finish_date;
	var user = req.session.idUser;

	var location = req.body.longitude_start + ',' + req.body.latitude_start + ',' + req.body.longitude_finish + ',' + req.body.latitude_finish;

	// Variables to handling errors
	var errorStatus = false;
	var errorMsg;

	// Verifying if one of the 3 condition to stream exist
	if(follow != "" || track != "" || req.body.latitude_start ){
		if(follow != "")
			projectData.follow = follow;

		if(track != "")
			projectData.track = track;

		if(req.body.latitude_start)
			projectData.location = location;

	}else{
		errorStatus = true;
		errorMsg = "You should at least fill one of the parameters follow, track or location to start the twitter streaming project.";
	}


	// Verifying the project name
	if(name){
		projectData.name = name;
	}else{
		errorStatus = true;
		errorMsg = "You should assign a name to the project.";
	}


	// Verifying user session
	if(user){
		projectData.user = user;
	}else{
		errorStatus = true;
		errorMsg = "The user doesn't have permission to create a new project, please login.";
	}


	// Verifying if there's a set of languages selected
	if(languages != "")
		projectData.languages = languages;

	// verifying if exist a limit in the count
	if(count != "")
		projectData.count = count;

	if(!errorStatus){

		// Setting values for a user
		var project = new Project (projectData);

		// Saving the data in MongoDB
		project.save(
			function (err) {
				if (err){
					res.json({status: "BAD", msg: "Ups! There's a problem saving the project, please contact us."});
				}else{
					res.json({status: "OK"});
				}
			}
		);

	}else{
		res.json({status: "BAD", msg: errorMsg});
	}
	 	
});

module.exports = router;