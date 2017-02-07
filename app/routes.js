var Nerd = require('./models/Nerd.js');


module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes
	app.get('/api/nerds', function(req, res) {
            // use mongoose to get all nerds in the database
      Nerd.find(function(err, nerds) {

          // if there is an error retrieving, send the error.
                          // nothing after res.send(err) will execute
          if (err)
              res.send(err);

          res.json(nerds); // return all nerds in JSON format
      });
			//res.json("Momma we made it... to the db");
  });

// API POST
app.post('/api/nerds', function(req, res) {
	Nerd.create({name: 'bob'}, function(err, body) {
		if(err) {
			console.log(err);
			res.send(err);
		}
		res.send("success");
	
	});
	//res.send("sent");
});

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/index.html');
	});

};
