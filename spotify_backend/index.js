const express = require("express");
const { default: mongoose } = require("mongoose");
const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const User = require('./models/User');
const app = express();
require("dotenv").config();
const port = 8000;

// connect mongodb to node app
mongoose.connect(`mongodb+srv://dhruvarora862:${process.env.MONGO_PASSWORD}@cluster0.pk0em.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log("Db Connected");
    })
    .catch((err) => {
        console.log("Error while connecting to mongo", err);
    });


    // setting up passport-jwt

    
let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(port, () => {
    console.log("App is running on Port " + port);
});
