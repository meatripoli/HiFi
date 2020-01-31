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
};