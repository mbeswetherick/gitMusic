module.exports = function (db, schema) {
// Models
var User = schema.User;
var Song = schema.Song;

	return {
		api: function(req, res) {
			return res.json({Api : "I am working homie!"});
		},
		getUserById: function(req, res) {
			return User.findById(req.params.id)
					.populate('songs')
					.exec(function(err, user) {
						if(err) {
							return res.json({Api: "could not find user"});
						} else {
							return res.json(user);
						}
			});
		},
		uploadSong: function(req, res) {
			res.type('application/json');
			var body = req.body;
			console.log(body);			
			var newSong = new Song({
				name: body.name,
				creator: body.creatorId,
				uploadDate: '',
				length: 0,
				downloadCount: 0,
				comments: {},
				tag: req.body.tag,
				listenCount: 0,
				favoriteCount: 0
			});
			newSong.save(function (err) {
				if(!err) {
					return res.json(201, {Api: "song: " + body.name + " created successfully"});
				} else {
					return res.json({Api: "song not created bro"});
				}
			});
		},
		getLogin: function(req, res) {
			res.json({Api: "fuck dude, no login for you"});
		},
		postSignup: function(req, res) {
			res.header("Access-Control-Allow-Origin", "*");
  			res.header("Access-Control-Allow-Headers", "X-Requested-With");
			res.type('application/json');
			if(req.body) {
				var body = req.body;
				console.log(body);
				User.findOne({ $or:[ {'username':body.username}, {'email':body.email} ]}, function(err, user) {
					if(err) { //user with that username exists
						return next(err);
					} else if(user) {
						return res.json({Api: "username or email already in use"});
					} else {
						var newUser = new User({
							username: req.body.username,
							password: req.body.password,
							firstName: '',
							lastName: '',
							email: req.body.email,
							followers: {},
							favorites: {},
							avatar: ''
						});
						newUser.save(function (err) {
							if(!err) {
								 return res.json(201, {Api: "user created successfully"});
							} else {
								return res.json({Api: "user not created bro"});
							}
						});
					}
				});
			}
		},
		getSong: function(req, res) {
			return res.json({Api: "got song for you"});
		},
		getUserSongs: function(req, res) {
			return res.json({Api: "got user songs"});
		}
	};

	// Helper methods

	var getCurrentDate = function() {

	}


};