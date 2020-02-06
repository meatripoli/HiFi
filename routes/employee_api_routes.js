const db = require('../models');

module.exports = function(app) {
  app.get("/api/employees", function(req, res) {
    db.employee.findAll({
      include: {
        model: db.store,
      }
    }).then( data => {
      res.json(data);
    });
  });

    // req.body => first_name, last_name, address1, address2, 
    app.post("/api/employees", function(req, res) {
      db.employee.create({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        fav_album: req.body.fav_album,
        userId: req.user.id,
        storeId: 1
      }).then( employee  => {
        console.log(employee);
        res.redirect(307, "/login");
      });
    });

    app.get("/api/employee/:id", function(req, res) {
      db.employee.findAll().then( data => {
        res.json(data);
      });
    });

};