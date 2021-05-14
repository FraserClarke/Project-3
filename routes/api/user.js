const router = require("express").Router();
const passport = require("../../config/passport");
const User = require('../../models/user');
const bcrypt = require('bcrypt');
const db = require("../../models");

// Matches with POST /api/user/login
// Runs through the config/passport.js code because we added passport.authenticate('local') as a second parameter
// The request is sent to us via a string of random numbers and letters, and then passport
  // converts it into a user object, which is attached to the request
router.post("/login", passport.authenticate("local"), (req, res) => {
  // Sending back a password, even a hashed password, isn't a good idea, so we only send the email and id from the user object
  res.json({
    email: req.user.email,
    id: req.user.id
  });
});

  // Matches with POST /api/user/signup
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to bcrypt
  // If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  router.post("/signup", async (req, res) => {
    db.User.create({
      email: req.body.email,
      username: req.body.username,
      password: await bcrypt.hash(req.body.password, 10)
    })
      .then((user)=>{
        
        // User has been successfully created, so we send the full user object back to frontend to do something with it (redirect user, usually)
        res.send(user);
      })
      .catch(err => {
        res.status(500).json(err); // Something went wrong with user creation, so we're sending 500 (Server error) back to frontend
      });
});

// We use this endpoint to verify a user was previously logged in, by checking the session object. isAuthenticated() is a property provided by passport.
router.get("/logged-in", (req, res) => {
  res.json({isAuthenticated:req.isAuthenticated()});
});

router.get('/logout', (req, res) => {
  req.logout(); // This is a simple functionality provided by passport to log out a user and destroy any sessions associated with the user.
  res.send(200);
})

module.exports = router;
