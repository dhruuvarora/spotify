const express = require("express");
const router = express.Router();
const passport = require("passport");
const Song = require("../models/Song");
const User = require("../models/User");

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

router.get("/get/mysongs", passport.authenticate("jwt",{session:false}),
async(req,res)=>{
    const songs = await Song.find({artist:req.user._id});
    return res.status(200).json({data:songs});
}
);


// Get route to get all songs of a particular artist  can search via id of artist

// get route to get a single song by name

router.get("/get/artist" , passport.authenticate("jwt", {session:false}), async(req,res)=>{
    const {artistId} = req.body;
    // check if artist doesn't exists
    const artist = await User.find({
        _id:artistId
    });

    if(!artist){
        return res.status(301).json({err:"Artist Doesn't exists"});
    }
    const songs = await Song.find({artist:artistId})

    return res.status(200).json({data:songs});
})

// search song by name

router.get("/get/songname" , passport.authenticate("jwt" , {session:false}), async(req,res)=>{
    const {songName} = req.body;

    const songs = await Song.find({name:songName});
    return res.status(200).json({data:songs});
})

module.exports = router;
