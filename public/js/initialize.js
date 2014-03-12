var app = app || {};

$(document).ready(function(){
	var userView = new app.UserView();
	var signupView = new app.SignupView();
	var aboutView = new app.AboutView();
	app.router = new Router();

	app.router.on('route:home', function(){
		
		userView.render();
	});

	app.router.on('route:signup', function(){
		console.log('fuck with me');
		signupView.render();
	});

	app.router.on('route:about', function()	{

		aboutView.render();
	});

	Backbone.history.start();

})