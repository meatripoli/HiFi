const db = require('../models');

module.exports = function(app) {
  app.get("api/albums", function(req, res) {
    db.Album.findAll().then( album => {
      res.json(album);
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/albums", function(req, res) {
      db.Album.create(req.body).then( album => {
        res.json(album);
      });
    });

    app.post("/search", function(req, res) {
      console.log(req.body.searchInput);
      //below will be the code that searches the Album table for all albums called [req.body.searchInput]
      // db.Album.create(req.body).then( album => {
      //   res.json(album);
      // });
    });
};