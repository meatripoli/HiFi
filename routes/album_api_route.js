const db = require('../models');

module.exports = function(app) {
  app.get("api/albums", function(req, res) {
    db.Album.findAll().then( data => {
      res.json(data);
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/albums", function(req, res) {
      db.Album.create(req.body).then( album => {
        res.json(album);
      });
    });
};