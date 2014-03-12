module.exports = function(mongoose) {

	mongoose.connect('mongodb://gitmusic:duba@ds033599.mongolab.com:33599/gitmusic');
	var db = mongoose.connection;
	db.on('error', function() {
		console.log('connection error: mongodb test');
	});
	db.once('open', function() {
		console.log('connected to mongodb successfully');
	});
};

