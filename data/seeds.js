// will fail if records already exist in hifi_db
// (un)comment require() and sync() statements as appropriate

require("dotenv").config();
var db = require("../models");

// due to FK constraints, this insert order is significant
// todo: create storelist, employeelist, stocklist, reviewlist json files; can then uncomment

var userlist = require("./userlist.json");
var storelist = require("./storelist.json");
var employeelist = require("./employeelistShort.json");
var albumlist = require("./albumlist.json");
var stocklist = require("./stocklist.json");
var reviewlist = require("./reviewlist.json");

db.sequelize
  .sync()
  .then(function() {
    db.user.bulkCreate(userlist);
  })
  .then(function() {
    db.store.bulkCreate(storelist);
  })
  .then(function() {
    db.album.bulkCreate(albumlist);
  })
  .then(function() {
    db.employee.bulkCreate(employeelist);
  })
  .then(function() {
    db.stock.bulkCreate(stocklist);
  })
  .then(function() {
    db.review.bulkCreate(reviewlist);
  });
