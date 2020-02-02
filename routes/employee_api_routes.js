const db = require('../models');

module.exports = function(app) {
  app.get("/api/employees", function(req, res) {
    db.employee.findAll().then( data => {
      res.json(data);
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/employees", function(req, res) {
      db.employee.create(req.body).then( user => {
        res.json(user);
      });
    });

    app.get("/api/employee/:id", function(req, res) {
      db.employee.findAll().then( data => {
        res.json(data);
      });
    });
};