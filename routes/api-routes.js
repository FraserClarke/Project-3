// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");
const express = require("express");
const router = express.Router();

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/api/login", passport.authenticate("local"), (req, res) => {
  console.log(req.body.username);
  // Sending back a password, even a hashed password, isn't a good idea
  res.send({
    username: req.body.username,
    password: req.body.password,
  });
  // .then(() => {
  //   console.log(res);
  //   res.redirect(307, "/api/dashboard");
  // })
  // .catch((err) => {
  //   res.status(401).json(err);
  // });
});
// passport.authenticate("local")
// Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
// how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
// otherwise send back an error
router.post("/api/signup", (req, res) => {
  db.User.create({
    username: req.body.username,
    password: req.body.password,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    address: req.body.address,
    ownersTrade: req.body.ownersTrade,
    email: req.body.email,
  })
    .then(() => {
      console.log(res);
      //res.send not redirect
      //changing to send causes error
      res.redirect(307, "/api/login");
    })
    .catch((err) => {
      res.status(401).json(err);
    });
});

// Route for logging user out

router.get("/logout", (req, res) => {
  //req.logout will remove passport session
  req.logout();
  res.redirect("/");
});

// Route for getting some data about our user to be used client side
router.get("/api/user_data", (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      username: req.user.username,
      id: req.user.id,
    });
  }
});
module.exports = router;
