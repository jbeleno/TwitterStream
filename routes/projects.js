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

	if(req.session.idUser){

		// Getting the project data
		var name = req.body.name;
		var follow = req.body.follow;
		var track = req.body.track;
		var location = req.body.location;
		var languages = req.body.languages;
		var count = req.body.count;
		var start_date = req.body.start_date;
		var finish_date = req.body.finish_date;
		var user = req.session.idUser;

		// Setting values for a user
		var project = new Project ({
			name : 		name,
			follow: 	follow,
			track: 	 	track,
			location: 	location,
			languages: 	languages,
			count: 		count,
			start_date: start_date,
			finish_date:finish_date,
			user: 		user
		});

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
		res.json({status: "BAD", msg: "The user doesn't have permission to create a new project, please login."});
	}  	
});

module.exports = router;