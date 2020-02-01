// will fail if records already exist in hifi_db
// (un)comment require() and sync() statements as appropriate

require("dotenv").config();
var db = require("../models");

var userlist = require("./userlist.json");
// var albumlist = require("./albumlist.json");

db.sequelize.sync().then(function() {
  db.User.bulkCreate(userlist);
});

// db.sequelize.sync().then(function() {
//   db.Album.bulkCreate(albumlist);
// });
