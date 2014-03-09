// Db stuff goes here
var mongoose = require('mongoose');
var schema = require('./schema')

mongoose.connect('mongodb://localhost:27017/test')
var db = mongoose.connection;
db.on('error', function() {
	console.log('connection error: mongodb test');
});
db.once('open', function() {
	console.log('connected to mongodb successfully');
});