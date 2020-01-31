const db = require("../models");
var passport = require("../config/passport");


module.exports = function(app) {

  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });
  // USER => Api routes
  app.get("/api/secret/users", function(req, res) {
    db.User.findAll().then( users => {
      res.json(users);
    });
  });
  // req.body => email, password
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then( user => {
      res.json(user);
    });
  });
  
  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });
};
