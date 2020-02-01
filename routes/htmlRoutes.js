const path = require("path");
var db = require("../models");
const passport = require("../config/passport");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");
// js template literal pages
const nonAuthLayout = require("../views/unauthenticatedLayout");
const authLayout = require("../views/authenticatedLayout");
var index = require("../views/index.js");
const loginPage = require("../views/login");
const signupPage = require("../views/signup");
const search = require("../views/search.js");
const detail = require("../views/detail.js");

// THIS FILE IS NO LONGER BEING REQUIRED IN OUR server.js
// The file being called is html-routes

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
    res.send(nonAuthLayout.render(loginPage.render()));
  });

  app.get("/search", function(req, res) {
    res.send(search.render(detail.render()));
  });

  // User create form
  app.get("/new", function(req, res) {
<<<<<<< HEAD
    if (req.user) {
      res.redirect("/search");
    }
    res.send(nonAuthLayout.render(signupPage.render()));
  })
=======
    res.sendFile(path.join(__dirname, "../public/html/signup.html"));
  });
>>>>>>> fixed issue with my get request not working

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/404.html"));
  });

  // Authenticated routes
  app.get("/search", isAuthenticated, function(req, res) {
    res.send(authLayout.render(search.render()));
  });
  
  app.get("/employee", function(req, res) {
    res.send(authLayout.render(req.user));
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
