const path = require("path");
var db = require("../models");
const passport = require("../config/passport");
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated.js");
// js template literal pages
const authLayout = require("../views/authenticatedLayout.js");
const loginPage = require("../views/login");
const signupPage = require("../views/signup.js");
const search = require("../views/search.js");
const detail = require("../views/detail.js");
const employeeView = require("../views/employee.js");
const newEmployeeView = require("../views/employeeNew.js");
const notFound = require("../views/404.js");

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
    res.send(loginPage.render());
  });

  // New user signup form
  app.get("/new", function(req, res) {
    if (req.user) {
      res.redirect("/search");
    }
    res.send(signupPage.render());
  });

  // Authenticated routes - only /search is authenticated rn
  app.get("/search", isAuthenticated, function(req, res) {
    db.user.findOne({
      where: {
        id: req.user.id
      },
      include: {
        model: db.employee,
      }
    }).then(user => {
    res.send(authLayout.render("Store Record Search", 
      user, search.render(detail.render())));
    });
  });

  app.get("/employee", isAuthenticated, function(req, res) {
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
    }).then(user => {
      res.send(authLayout.render("HiFi Employee Home", user,
        employeeView.render(user)));
    });
  });

  app.get("/employee/new", (req, res) => {
    res.send(newEmployeeView.render("Welcome to HiFi"));
  });

  // This needs to be the last route defined (render 404 for unmatched routes)
  app.get("*", function(req, res) {
    res.send(notFound.render());
  });
};
