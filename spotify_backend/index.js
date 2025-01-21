const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const authRoutes = require("./routes/auth");
const User = require("./models/User");
const songRoutes = require("./routes/song");
const playlistRoutes = require("./routes/playlist");
require("dotenv").config();

const app = express();
const port = 8000;

app.use(express.json());

// Connect MongoDB to the Node app
mongoose
    .connect(
        `mongodb+srv://dhruvarora862:${process.env.MONGO_PASSWORD}@cluster0.pk0em.mongodb.net/spotify?retryWrites=true&w=majority&appName=Cluster0`
    )
    .then(() => {
        console.log("Db Connected");
    })
    .catch((err) => {
        console.error("Error while connecting to MongoDB:", err);
    });

// Setting up passport-jwt
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET,
};

passport.use(
    new JwtStrategy(opts, async (jwt_payload, done) => {
        console.log("JWT Payload:", jwt_payload);  // Log to debug the payload
        try {
            const user = await User.findOne({ _id: jwt_payload.identifier });  // Ensure correct field
            if (user) {
                return done(null, user);
            } else {
                return done(null, false);
            }
        } catch (err) {
            return done(err, false);
        }
    })
);

// Middleware to initialize passport
app.use(passport.initialize());

// Routes
app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

// Start the server
app.listen(port, () => {
    console.log("App is running on Port " + port);
});
