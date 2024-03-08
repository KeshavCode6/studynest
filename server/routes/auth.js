// dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const session = require("express-session");
const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    passReqToCallback: true
}, (request, accessToken, refreshToken, profile, done) => {
    done(null, profile);
}));

// Middleware
router.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
router.use(passport.initialize());
router.use(passport.session());

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

// Google authentication route
router.get("/google", passport.authenticate("google", {
    scope: ["email", "profile"]
}));

// Google authentication callback route
router.get("/google/callback",
    passport.authenticate("google", {
        successRedirect: `${process.env.REDIRECT_FORWADED}/home`,
        successRedirect: `${process.env.REDIRECT_FORWADED}`,
    })
);

// Logout route
router.use("/logout", (req, res) => {
    req.session.destroy();
    res.redirect(`${process.env.REDIRECT_FORWADED}`);
});

module.exports = router;
