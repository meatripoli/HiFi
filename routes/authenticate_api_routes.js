const db = require("../models");
const passport = require("../config/passport");


module.exports = function(app) {
  // USER login
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });
  // USER create (signup) req.body => email, password
  app.post("/api/users", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // USER => authenticated route to see all created users
  app.get("/api/secret/users", passport.authenticate("local"), function(req, res) {
    db.User.findAll().then( users => {
      res.json(users);
    });
  });

  // USER => NON authenticated route to see all created users
  app.get("/api/users", function(req, res) {
    db.User.findAll().then( users => {
      res.json(users);
    });
  });
  
  // USER logout
  // logout() method provided by Passport http://www.passportjs.org/docs/logout/
    app.get("/logout", function(req, res) {
      req.logout();
      res.send("Logged out");
    });
  
};
