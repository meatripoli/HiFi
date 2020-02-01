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
const notFound = require("../views/404.js");
const detail = require("../views/detail.js");

module.exports = function(app) {

  // Non authenticated routes
  // Load index page
  app.get("/", function(req, res) {
    res.redirect("/login");
  });
  // User login
  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/search");
    }
    res.send(nonAuthLayout.render(loginPage.render()));
  });

  // New user signup form
  app.get("/new", function(req, res) {
    if (req.user) {
      res.redirect("/search");
    }
    res.send(nonAuthLayout.render(signupPage.render()));
  })

  // Authenticated routes - only /search is authenticated rn
  app.get("/search", isAuthenticated, function(req, res) {
    res.send(authLayout.render(search.render(detail.render())));
  });

  app.get("/employee", function(req, res) {
    res.send(authLayout.render(req.user));
  });

  // This needs to be the last route defined (render 404 for unmatched routes)
  app.get("*", function(req, res) {
    res.send(nonAuthLayout.render(notFound.render()));
  });
};
