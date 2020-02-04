const db = require('../models');

module.exports = function(app) {
  app.get("/api/album/:album", function(req, res) {
    console.log("inside server get req")
    console.log(req.params.album);
    //below will be the code that searches the Album table for all albums called [req.body.searchInput]
    // db.Album.findAll().then( album => {
    //   res.json(album);
    // });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/album", function(req, res) {
      db.Album.create(req.body).then( album => {
        res.json(album);
      });
    });
};