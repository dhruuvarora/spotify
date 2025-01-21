const express = require("express");
const router = express.Router();
const passport = require("passport");
const Playlist = require("../models/Playlist");

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
router.get("/get/:playlistId" , passport.authenticate("jwt", {session:false}), async (req,res)=>{

    // params ---> used for calling api by giving input in get 
    const playlistId = req.params.playlistId;
// need to find playlisst  with playlist_id
    const playlist= await Playlist.findOne({_id:playlistId});

    if(!playlist){
        return res.status(300).json({err:"Invalid Id"});

    }
    return res.status(200).json(playlist);
});

module.exports = router;