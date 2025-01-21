const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");

router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    console.log("Authenticated user:", req.user);  // Check the user authentication

    if (!req.user) {
        return res.status(401).json({ error: "User not authenticated" });
    }

    const { name, thumbnail, track } = req.body;

    if (!name || !thumbnail || !track) {
        return res.status(400).json({ err: "Insufficient details to create song" });
    }

    const artist = req.user._id;
    const songDetails = { name, thumbnail, track, artist };
    try {
        const createdSong = await Song.create(songDetails);
        return res.status(200).json(createdSong);
    } catch (error) {
        return res.status(500).json({ err: "Error creating song", details: error.message });
    }
});

module.exports = router;
