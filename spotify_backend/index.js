const express = require("express");
const mongoose = require("mongoose");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const passport = require("passport");
const authRoutes = require("./routes/auth");
const User = require("./models/User"); // Ensure the correct path to your User model
const songRoutes = require("./routes/song");
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
        try {
            // Use async/await to find the user
            const user = await User.findOne({ _id: jwt_payload.sub }); // Ensure your payload has `sub` as the user ID
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

// Start the server
app.listen(port, () => {
    console.log("App is running on Port " + port);
});
