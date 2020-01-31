const db = require('../models');

module.exports = function(app) {
  app.get("/api/employee", function(req, res) {
    db.Employee.findAll().then( data => {
      res.json(data);
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/employee", function(req, res) {
      db.Employee.create(req.body).then( user => {
        res.json(user);
      });
    });
};