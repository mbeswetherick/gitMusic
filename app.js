var express = require('express');
var fs = require('fs');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
var db = require('./server/db');
var handler = require('./server/handler')(db);
require('./server/router')(app, handler);

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname+ '/public'));
	app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
	app.use(app.router);
	app.enable('trust proxy');
});

var port = 3033;
app.listen(port);
console.log( "Running on " + port );
