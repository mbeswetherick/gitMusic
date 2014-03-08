var express = require('express');
var fs = require('fs');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
require('./server/router')(app);

app.configure(function(){
	app.set('views', __dirname + '/views');
	app.use(express.bodyParser());
	app.use(express.cookieParser());
	app.use(express.methodOverride());
	app.use(express.static(__dirname+ '/public'));
	app.use(app.router);
	app.enable('trust proxy');
});

app.configure('development', function(){
  app.use(express.errorHandler());
    app.locals.pretty = true;
});

var port = 3033;
app.listen(port);
console.log( "Running on " + port );
