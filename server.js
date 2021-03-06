const express = require("express");
const path = require("path");
const session = require("express-session");
const routes = require("./routes")
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
const passport = require("./config/passport");
// Setting up port and requiring models for syncing
// const PORT = process.env.PORT || 8080;
const db = require("./models");


app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}));


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
//secret typically not stored here
//secret is key that unlocks each session
app.use(
  session({ secret: "keyboard cat", 
  //may need to change to false
  resave: true, 
  saveUninitialized: true })
);
app.use(passport.initialize());
//converts into proper user object
app.use(passport.session());

// Requiring our routes
//require("./routes/html-routes.js")(app);
app.use(routes);
// app.use("", apiRoutes);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });
