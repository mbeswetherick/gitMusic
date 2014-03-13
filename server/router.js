module.exports = function(app, handler, schema) {
	
	app.get('/api', handler.api);

	app.get('/api/user/:id', handler.getUserById);

	app.post('/api/upload', handler.uploadSong);

	app.get('/api/login,', handler.getLogin);

	app.post('/api/signup', handler.postSignup);

	app.get('/api/song/:id', handler.getSong);

	app.get('/api/user/songs', handler.getUserSongs);

};