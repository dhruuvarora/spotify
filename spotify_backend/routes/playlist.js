const express = require("express");
const router = express.Router();
const passport = require("passport");
const Playlist = require("../models/Playlist");
const User = require("../models/User");
const Song = require("../models/Song");

// create a playlist route

router.post("/create",passport.authenticate("jwt", {session:false}),async (req,res)=>{
    const currentUser = req.user;
    const {name , thumbnail , songs} = req.body;

    if(!name || !thumbnail || !songs){
        return res.status(300).json({err:"Insufficient Data"});
    }
    const playlistData = {name , thumbnail , songs , owner:currentUser._id , collaborators:[]};

    const playlist = await Playlist.create(playlistData);

    return res.status(200).json(playlist);
});

// router-2 get playlist by id
//  we are using ':' this means that playlist id is variable and we can assign any value
router.get("/get/playlist/:playlistId" , passport.authenticate("jwt", {session:false}), async (req,res)=>{

    // params ---> used for calling api by giving input in get 
    const playlistId = req.params.playlistId;
// need to find playlisst  with playlist_id
    const playlist= await Playlist.findOne({_id:playlistId});

    if(!playlist){
        return res.status(300).json({err:"Invalid Id"});

    }
    return res.status(200).json(playlist);
});


// get all playlist made by an artist
router.get("/get/artist/:artistId" , passport.authenticate("jwt" , {session:false}) , async(req,res)=>{
    const artistId = req.params.artistId;


    // error handling : check if artists Id exists

    const artist = await User.findOne({_Id:artistId});

    if(!artist){
        return res.status(304).json({error:"Invalid Artist Id"});
    }

    // finding artist based on songs or playlist

    const playlists = await Playlist.find({owner:artistId});
    

    return res.status(200).json({data:playlists});
})


// add a song to playlist


router.post("/add/song" , passport.authenticate("jwt" , {session:false}) , async (req,res)=>{
    const currentUser = req.user;

    const {playlistId , songId} = req.body;

// Step- 0 Get playlist if Valid

    const playlist = await Playlist.findOne({_id:playlistId});
    if(!playlist){
        return res.status(304).json({error:"Playlist Doesn't Exist"});
    }

    // step 1 : check if current user owns playlist || is a collaborator

    if(!playlist.owner.equals(currentUser._id) && !playlist.collaborators.includes(currentUser._id)){
        return res.status(400).json({error:"Not Allowed"})
    }

    // step-2 Check if song is valid song

    const song = await Song.findOne({_id:songId});
    if(!song){
        return res.status(304).json({error:"Song Doesn't exists"});
    }

    // Step-3 We can Now simply add the song to the playlist

    playlist.songs.push(songId);
    await playlist.save();

    return res.status(200).json(playlist);
})

module.exports = router;