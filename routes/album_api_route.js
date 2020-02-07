const db = require('../models');

module.exports = function(app) {
  app.get("/api/albums/:album", function(req, res) {
    //below will be the code that searches the Album table for all albums called [req.body.searchInput]
    db.album.findAll({
      where: {
        //album: req.params.album
        album: {
          [db.Sequelize.Op.like]: `%${req.params.album}%`
        }
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
    db.sequelize.query(
      `SELECT b.stock,a.Year,a.Album,a.Artist,a.Genre,a.Img,a.Subgenre,c.Name,d.title,d.body
      FROM hifi_db.stocks b LEFT JOIN hifi_db.albums a ON a.id=b.albumId LEFT JOIN hifi_db.stores c ON b.storeId = c.id
      LEFT JOIN hifi_db.reviews d ON d.albumId=b.albumId where b.albumId=${req.params.id}`, 
      {type: db.sequelize.QueryTypes.SELECT}
    )
    .then(function(album) {
      console.log(album)
      // We don't need spread here, since only the results will be returned for select queries
      res.json(album);
    })
  })
};