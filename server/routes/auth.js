// dependencies
const express = require("express");
const router = express.Router();
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth2").Strategy;
const session = require("express-session");
const path = require("path");
const user = require("../schemas/user")

require("dotenv").config({ path: path.join(__dirname, "../.env") });

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "https://r43w753r-4000.use2.devtunnels.ms/auth/google/callback",
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
        successRedirect: `/createAccount`,
        failureRedirect: `https://r43w753r-4173.use2.devtunnels.ms/home`,
    })
);

// Logout route
router.use("/logout", (req, res) => {
    req.session.destroy();
    res.redirect(`https://r43w753r-4173.use2.devtunnels.ms/`);
});

router.get("/createAccount", (req, res) => {
    User.findOne({ id: req.user.id }).then((usr) => {
        if (!usr) {
            const username = `${req.user.name.givenName.charAt(0).toLowerCase()}${req.user.name.familyName.charAt(0).toLowerCase()}.${Math.round(Math.random() * 999999)}`;
            const user = new User({
                id: req.user.id,
                username: username,
                display: `${req.user.name.givenName} ${req.user.name.familyName}`,
                picture: req.user.picture,
                points: 0
            });
            user.save();
        }
    });

    res.sendFile(path.join(__dirname, "../build", "dashboard.html"));
})

const isLoggedIn = (req, res, next)=>{
    req.user? next():res.json({"Error":"Not logged in"})
}

module.exports = {
    router: router,
    loggedIn: isLoggedIn,
};