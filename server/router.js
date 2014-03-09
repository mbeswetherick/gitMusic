module.exports = function(app, handler) {
	
	app.get('/api', handler.api);

	app.get('/user/:id', handler.getUser);

	app.post('/upload', handler.uploadSong);

	app.get('/about', handler.getAbout);

	app.get('/login,', handler.getLogin);

	app.post('/signup', handler.postSignup);


}