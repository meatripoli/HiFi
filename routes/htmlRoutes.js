var db = require("../models");
var index = require("../views/index.js");
const search = require("../views/search.js");
const path = require("path");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.send(index.render());
  });

  app.get("/search", function(req, res) {
    res.send(search.render());
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
