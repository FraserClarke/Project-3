const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

const db = require('../models/');
// const db = require("../models/user");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(
    new LocalStrategy(
      // Our user will sign in using an email, rather than a "username"
      // This is optional
      {
        usernameField: "email"
      },
      (email, password, done) => {
        // When a user tries to login this code runs
        db.User.findOne(
          {
            email: email
          }
        ).then(dbUser => {
          // If there's no user with the given email
          if (!dbUser) {
            return done(null, false, {
              message: "Incorrect email."
            });
          }
          // If there is a user with the given email, but the password the user gives us is incorrect
          else if (!bcrypt.compareSync(password, dbUser.password)) {
            console.log(password);
            console.log(dbUser.password);
            return done(null, false, {
              
              message: "Incorrect password."
              
            });
            
          }
          // If none of the above, attach the database's user object to the request that invokes this function
          return done(null, dbUser);
        });
      }
    )
  );
  
  // DO NOT CHANGE THESE TWO FUNCTIONS
  // In order to help keep authentication state across HTTP requests,
  // Sequelize needs to serialize and deserialize the user
  // Just consider this part boilerplate needed to make it all work
  passport.serializeUser((user, cb) => {
    cb(null, user);
  });
  
  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
  
  // Exporting our configured passport
  module.exports = passport;
  