/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file handles with all the schema in the redis database, it's the base
* and the central file to use all the sessions in this website. 
**/

var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var hour = 3600000;

var SessionObject = new RedisStore({
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    pass: process.env.REDIS_PASSWORD
});

module.exports = function(){
	return session({
	    store: SessionObject,
	    secret: process.env.REDIS_KEY,
	    resave: true,
	    saveUninitialized: true,
	    cookie: { secure: 'auto', maxAge: hour}
	});
}