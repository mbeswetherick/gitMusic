var app = app || {};

$(document).ready(function(){
	var userView = new app.UserView();
	app.router = new Router();

	app.router.on('route:home', function(){
		
		userView.render();
	});

	Backbone.history.start();

})