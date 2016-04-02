var express = require('express');
var router = express.Router();

/* GET home page(Login Form OR Dashboard). */
router.get('/', function(req, res, next) {

	// If the user isn't logged in then it's shown the login form, otherwise
	// it's shown the dashboard with user projects
	if(!req.session.idUser){
		res.render('index', { title: 'Twitter Stream' });
	}else{
		res.render('dashboard', { title: 'Twitter Stream Dashboard' });
	}

});

module.exports = router;
