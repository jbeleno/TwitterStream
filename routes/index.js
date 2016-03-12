var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Twitter Stream' });
});

/* GET Dashboard. */
router.get('/dashboard', function(req, res, next) {
  res.render('Dashboard', { title: 'Twitter Stream Dashboard' });
});

module.exports = router;
