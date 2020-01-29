const db = require('../models');

module.exports = function(app) {
  app.get("api/stores", function(req, res) {
    db.Store.findAll().then( data => {
      res.json(data);
    });
  });

    // req.body => name, hour_open, hour_close are required
    app.post("/api/stores", function(req, res) {
      db.Store.create(req.body).then( data => {
        res.json(data);
      });
    });
};