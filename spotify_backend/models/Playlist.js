const mongoose = require("mongoose");

const Playlist = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    thumbnail:{
        type:String,
        required:false,
    },
    songs:[{
        type:mongoose.Types.ObjectId,
        ref:"song",
    }],
    owner:{
        type:mongoose.Types.ObjectId,
        ref:"User",
    },

    collaborators:[{
        type:mongoose.Types.ObjectId,
        ref:"user",
    }]
});


const PlaylistModel = mongoose.model("Playlist" , Playlist);
module.exports = PlaylistModel;