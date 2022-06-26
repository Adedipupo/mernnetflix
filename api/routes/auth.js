const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


//REGISTER

router.post("/register",(req,res) => {
    const newUSer = new User({
        username: req.body.username,
        email : req.body.email,
        password : req.body.password,
    })

    const user = newUSer.save();
    res.json(user);
})