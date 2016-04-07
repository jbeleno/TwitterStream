/**! TWITTER STREAM COLLECTOR
* @Author  Juan Sebastián Beleño Díaz
* @Email   <jsbeleno@gmail.com>
* @version 1.0.0
*
* This file handles with all the schema in the mongo database, it's the base
* and the central file to use all the mongo queries. 
**/

var mongoose = require ("mongoose");

var uristring = process.env.MONGO_URI;

// Define some useful constants
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;


// Define Schemas
var ProjectSchema = new Schema({
	id : 		{ type : Number, min:0},
	name : 	    { type : String },
	follow: 	{ type : String },
	track: 		{ type : String },
	location : 	{ type : String },
	languages : { type : String },
	count : 	{ type : Number },
	start_date: { type: Date, default: Date.now },
	finish_date:{ type: Date, default: Date.now },
	user : 	    { type : Object , default : {} },
	date: 		{ type: Date, default: Date.now }
});

var Project = mongoose.model('Project', ProjectSchema);


var StreamSchema = new Schema({
	id : 		{ type : Number, min:0},
	tweet : 	{ type : String },
	project : 	{ type : Object , default : {} },
	date: 		{ type: Date, default: Date.now }
});

var Stream = mongoose.model('Stream', StreamSchema);

var UserSchema = new Schema({
	id : 		{ type : Number, min:0},
	name : 	    { type : String },
	user: 		{ type : String },
	password: 	{ type : String },
	ip: 		{ type : String },
	date: 		{ type: Date, default: Date.now }
});

var User = mongoose.model('User', UserSchema);


// Makes connection asynchronously.  Mongoose will queue up database
// operations and release them when the connection is complete.
mongoose.connect(uristring, function (err, res) {
	if (err) {
		console.log ('ERROR connecting to: ' + uristring + '. ' + err);
	} else {
		console.log ('Succeeded connected to: ' + uristring);
	}
});

module.exports = mongoose;