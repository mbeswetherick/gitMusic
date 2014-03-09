var app = app || {};

var Router = Backbone.Router.extend({
	routes: {
		'' : 'home',
		'about' : 'about',
		'signup' : 'signup',
		'upload' : 'upload',
		'login' : 'login'
	}
});

