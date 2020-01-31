const db = require('../models');

module.exports = function(app) {
  app.get("api/stocks", function(req, res) {
    db.Stock.findAll().then( stock => {
      res.json(stock);
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/stocks", function(req, res) {
      db.Stock.create(req.body).then( stock => {
        res.json(stock);
      });
    });
};