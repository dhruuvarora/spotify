// const express = require("express");
// const router = express.Router();
// const passport = require("passport");
// const Song = require("../models/Songs")

// router.post("/create",passport.authenticate("jwt",{session:false}), async (req,res)=>{
//     // req.user gets user authenticate
//     const {name,thumbnail , track} = req.body;

//     if(!name || !thumbnail || !track){
//         return res.status(301).json({err : "Insufficient details to create song"});
//     };
//     const artist = req.user._id;
//     const songDetails = {name , thumbnail , track , artist}
//     const createdSong = await Song.create(songDetails);

//     return res.status(200).json(createdSong);
// });

// // Get route

// router.get("/get/mysongs" , passport.authenticate("jwt",{session:false}), async(req,res)=>{
//     const currentUser = req.user;
//     // all songs where artisitsid == currentuserid

//     const songs = await Song.find({artist:req.user._id});
//     return res.status(200).json({data:songs});
// });

// module.exports = router;

const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Songs");

// POST route to create a song
router.post("/create", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        const { name, thumbnail, track } = req.body;

        // Validate required fields
        if (!name || !thumbnail || !track) {
            return res.status(301).json({ error: "Insufficient details to create song" });
        }

        // Set artist as the authenticated user
        const artist = req.user._id;
        const songDetails = { name, thumbnail, track, artist };

        // Create song in the database
        const createdSong = await Song.create(songDetails);
        return res.status(200).json({ message: "Song created successfully", data: createdSong });
    } catch (error) {
        return res.status(500).json({ error: "Failed to create song", details: error.message });
    }
});

// GET route to fetch songs created by the authenticated user
router.get("/get/mysongs", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        // Find songs where the artist matches the authenticated user
        const songs = await Song.find({ artist: req.user._id });
        if (songs.length === 0) {
            return res.status(404).json({ message: "No songs found for the current user" });
        }

        return res.status(200).json({ message: "Songs fetched successfully", data: songs });
    } catch (error) {
        return res.status(500).json({ error: "Failed to fetch songs", details: error.message });
    }
});

module.exports = router;
