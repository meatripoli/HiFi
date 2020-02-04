const db = require('../models');
const search = require("../views/search-alex.js");
const detail = require("../views/detail.js");
const searchList = require("../views/searchResultList.js");

module.exports = function(app) {
  app.get("/api/albums/:album", function(req, res) {
    console.log("inside server get req")
    console.log(req.params.album);
    //below will be the code that searches the Album table for all albums called [req.body.searchInput]
    db.album.findAll({
      where: {
        album: req.params.album
      }
    }).then( album => {
      console.log(album.length);
      console.log(album[0].dataValues);
      res.json(album);
      ///send json back client will tackle the rendering to page
      //or I push the new page with the rendered info
      //idk yet
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    // app.post("/api/albums", function(req, res) {
    //   db.Album.create(req.body).then( album => {
    //     res.json(album);
    //   });
    // });
};