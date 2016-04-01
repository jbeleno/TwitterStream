/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file handles with all the schema in the redis database, it's the base
* and the central file to use all the sessions in this website. 
**/

var redis = require("redis");

var uristring = process.env.REDIS_URI;

var client = redis.createClient(uristring);