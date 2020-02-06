const db = require("../models");
const passport = require("../config/passport");

module.exports = function(app) {
  // USER login
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });
  // USER create (signup) req.body => email, password
  app.post("/api/users", function(req, res) {
    db.user.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function(data) {
        // res.json(data);
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  // USER => "secret" route to see all created users
  app.get("/api/users", function(req, res) {
    db.user.findAll({
      include: {
        model: db.employee,
        include: {
          model: db.store
        }
      }
    }).then( users => {
      res.json(users);
    });
  });

    // USER => "secret" route to see one user
    app.get("/api/users/:id", function(req, res) {
      db.user.findOne({
        where: {
          id: req.user.id
        },
        include: {
          model: db.employee,
          include: {
            model: db.store
          }
        }
      }).then( users => {
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
