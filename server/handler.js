module.exports = function (db, schema) {
// Models
var User = schema.User;

	return {
		api: function(req, res) {
			res.json({Api : "I am working homie!"});
		},
		getUser: function(req, res) {
			return User.findById(req.params.id, function(err, user) {
				if(!err) {
					return res.json(user);
				} else {
					return res.json({Api: "could not find user"});
				}
			});
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
			res.type('application/json');
			console.log(req.body.username);
			var newUser = new User({
				username: req.body.username,
				password: req.body.password,
				firstName: '',
				lastName: '',
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