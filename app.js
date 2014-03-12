var express = require('express');
var fs = require('fs');
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();

app.configure(function(){
  app.use(express.logger());
  app.use(express.compress());
  app.set('views', __dirname + '/views');
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  // Load the parts of the app
  var mongoose = require('mongoose');
  var schema = require('./server/schema')(mongoose);
  var db = require('./server/db')(mongoose);
  var handler = require('./server/handler')(db, schema);
  require('./server/router')(app, handler, schema);
  //app.use(app.router);
  app.use(express.static(__dirname+ '/public'));
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  app.enable('trust proxy');
});


var port = 3033;
app.listen(port);
console.log("Running on " + port);
