var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/search/api/:album", function(req, res) {
    let album = req.params.album;
    // db.Example.findAll({}).then(function(dbExamples) {
    //   res.json(dbExamples);
    // });
  });

  // Create a new review of album
  app.post("/search/review", function(req, res) {
    ///album id and user id will be pulled from the html divs
    // db.Example.create(req.body).then(function(dbExample) {
    //   res.json(dbExample);
    // });
  });

  // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // USER => Api routes
  app.get("/api/users", function(req, res) {
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

};
