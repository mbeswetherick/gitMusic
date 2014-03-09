var app = app || {};

$(document).ready(function(){
	var userView = new app.UserView();
	var signupView = new app.SignupView();
	var aboutView = new app.AboutView();
	var uploadView = new app.UploadView();
	var loginView = new app.LoginView();
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

	app.router.on('route:upload', function()	{

		uploadView.render();
	});

	app.router.on('route:login', function() {
		loginView.render();
	});

	Backbone.history.start();

})