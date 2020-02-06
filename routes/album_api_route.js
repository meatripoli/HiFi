const db = require('../models');

module.exports = function(app) {
  app.get("/api/albums/:album", function(req, res) {
    //below will be the code that searches the Album table for all albums called [req.body.searchInput]
    db.album.findAll({
      where: {
        album: req.params.album
      }
    }).then( album => {
      if(album.length === 0){
        album = [{id: 0,
          Album: req.params.album,
          }];        
      }
      res.json(album);
    });
  });

  app.get("/api/result/:id", function(req, res) {
    //below will be the code that searches the Album table for all albums called [req.body.searchInput]
    db.album.findAll({
      where: {
        album: req.params.id
      },
      include: [
        {
          model: db.store
        }
      ]
    }).then( album => {
      console.log(album);
    });
  });
};