require("dotenv").config();
var express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
var db = require("./models");

var app = express();
var PORT = process.env.PORT || 3000;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));

// Use sessions to keep track of our user's login status
// app.use(
//   session({ secret: "keyboard kitten", resave: true, saveUninitialized: true })
// );
// app.use(passport.initialize());
// app.use(passport.session());

// Routes
<<<<<<< HEAD
require("./routes/authenticate_api_routes")(app);
=======
require("./routes/apiRoutes")(app);
>>>>>>> fixed issue with my get request not working
require("./routes/employee_api_routes")(app);
require("./routes/store_api_routes")(app);
require("./routes/album_api_route")(app);
require("./routes/review_api_route")(app);
require("./routes/stock_api_route")(app);
<<<<<<< HEAD
require("./routes/html-routes")(app);
=======
require("./routes/htmlRoutes")(app);

>>>>>>> fixed issue with my get request not working

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

module.exports = app;
