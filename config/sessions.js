/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file handles with all the schema in the redis database, it's the base
* and the central file to use all the sessions in this website. 
**/
var redis = require('redis');
var session = require('express-session');
var RedisStore = require('connect-redis')(session);

var hour = 3600000;

var redisClient = redis.createClient({
	host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD
});

redisClient.on('error', function(err) {
     console.log('Redis error: ' + err);
});

redisClient.on('warning', function(err) {
     console.log('Redis warning: ' + err);
});

redisClient.on('connect', function() {
     console.log('Redis connected');
});

redisClient.on('ready', function(data) {
     console.log('Redis ready');
});

var SessionObject = new RedisStore({
    client: redisClient
});

module.exports = function(){
	return session({
	    store: SessionObject,
	    secret: process.env.REDIS_KEY,
	    resave: true,
	    saveUninitialized: true,
	    cookie: { secure: true, maxAge: hour}
	});
}