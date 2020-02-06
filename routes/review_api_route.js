const db = require('../models');

module.exports = function(app) {
  app.get("api/reviews", function(req, res) {
    db.Review.findAll().then( review => {
      res.json(review);
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/reviews", function(req, res) {
      db.Review.create(req.body).then( review => {
        res.json(review);
      });
    });

  app.get("/api/secret/review", function(req, res) {
    //below will be the code that searches the Album table for all albums called [req.body.searchInput]
    db.album.findOne({
      where: {
        id: 7,
        include: {
          model: db.review,
        }
      }
    }).then( album => {
      res.json(album);
    });
  });
};