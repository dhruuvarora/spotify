const express = require("express");
const router = express.Router();
const User = require('../models/User')
const bcrypt =require("bcrypt");
const {getToken} = require("../utils/helpers")

router.post("/register" , async(req,res)=>{
    // register user
    // register req will of format {email , password , firstname , lastname , username}

    const {email , password , firstName, lastName , username} = req.body;

    // step-2 User Already Exists

    const user = await User.findOne({
        email: email
    });
    if(user){
        return res
        .status(403)
        .json({error:"A user with this email already exists"});
    }
    // valid reques
    // create a new user in the db
    // imp: we dont store passwords in plain text
    // need to convert password to hashed pwd

    const hashedPassword = bcrypt.hash(password,10);
    const newUserData = {email , password:hashedPassword, 
        firstName , lastName , username};

    const newUser = await User.create(newUserData);

    // step-4

    // creating a specific token for a user

    const token = await getToken(email , newUser);
    // step 5 return result to uer
    const userToReturn  = {...newUser.toJSON(),  token};
    delete userToReturn.password;
    return res.status(200).json(userToReturn);
});