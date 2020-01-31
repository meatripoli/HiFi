const path = require("path");
var db = require("../models");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// js template literal pages
var index = require("../views/index.js");
const search = require("../views/search.js");
const detail = require("../views/detail.js");


module.exports = function(app) {

  // Non authenticated routes
  // Load index page
  app.get("/", function(req, res) {
    res.redirect("/login");
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/search");
    }
    res.send(index.render());
  });



  app.get("/search", function(req, res) {
    res.send(search.render(detail.render()));
  });

  // User create form
  app.get("/new", function(req, res) {
    if (req.user) {
      res.redirect("/search");
    }
    res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/404.html"));
  });

  // Authenticated routes
  app.get("/search", isAuthenticated, function(req, res) {
    res.send(search.render());
  });
};


  // Examples:
  // Ex. findOne
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });
