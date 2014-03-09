module.exports = function (db, schema) {

// Models
var User = schema.User;

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
			var newUser = new User({
				username: req.body.username,
				password: req.body.password,
				firstName: 'tits',
				lastName: 'mcgee',
				email: req.body.email
			});
			newUser.save(function (err) {
				if(!err) {
					res.json({Signup: "user created successfully"});
				} else {
					res.json({Signup: "user not created bro"});
				}
			});
		}
	};
};