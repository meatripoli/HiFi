const db = require('../models');

module.exports = function(app) {
  app.get("api/artists", function(req, res) {
    db.Artist.findAll().then( artist => {
      res.json(artist);
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/artists", function(req, res) {
      db.Artist.create(req.body).then( artist => {
        res.json(artist);
      });
    });
};