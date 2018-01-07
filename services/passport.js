const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');


passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleclientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken,refreshToken,profile,done) => {
      console.log(accessToken);
      console.log('refreshToken' ,refreshToken);
      console.log('profile', profile);
    }
  )
);
