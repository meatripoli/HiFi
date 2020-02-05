const db = require('../models');
const axios = require('axios');

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

  app.get("/api/album", function(req, res) {
    console.log("inside server get req")
    const output = [];

    //hit this route for console'd album links
    db.album.findAll().then( album => {  
      
      for (var i = 401; i <= 450; i++) {
        QueryURL2 = `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${album[i].Album}&api_key=32ac8da476ac9c4a40ed6e41c042107d&format=json`;
        
        axios.get(QueryURL2)
        .then(function(data){
          var Art = data.data.results.albummatches.album[0].image[3];
          output.push(Art);
          console.log(output)
           
        });
      }
  });
});
};