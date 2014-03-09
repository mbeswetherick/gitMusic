module.exports = function (db) {

	return {
		api: function(req, res) {
			res.send('Api working homie');
		},
		getUser: function(req, res) {
			res.json({User: "Fucking Mike Jones!"});
		},
		uploadSong: function(req, res) {
			res.json({Song: "Uploaded!"});
		},
		getAbout: function(req, res) {
			res.json({About: "Dat Shit"});
		},
		getLogin: function(req, res) {
			res.json({User: "fuck dude, no login for you"});
		},
		postSignup: function(req, res) {
			res.json({Signup: "Nice shit you got that signup done"});
		},
	};
};