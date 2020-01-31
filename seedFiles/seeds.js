// const db = require('../models');
require("dotenv").config();
var db = require("../models");

db.sequelize.sync().then(function() {
  db.User.bulkCreate([
    {
      email: "maria@hifi.com",
      password: "12345678"
    },
    {
      email: "alex@hifi.com",
      password: "12345678"
    },
    {
      email: "esteban@hifi.com",
      password: "12345678"
    },
    {
      email: "farai@hifi.com",
      password: "12345678"
    },
    {
      email: "nelan@hifi.com",
      password: "12345678"
    }
  ]);
});
