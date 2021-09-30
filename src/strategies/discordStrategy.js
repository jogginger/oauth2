const DiscordStrategy = require('passport-discord').Strategy;
const passport = require('passport');

passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });

passport.use( new DiscordStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: process.env.CLIENT_REDIRECT,
    scope: ['identify']
}, (accessToken, refreshToken, profile, done) => {
    done(null, profile)
}));