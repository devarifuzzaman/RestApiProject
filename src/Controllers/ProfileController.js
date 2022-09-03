const ProfileModel = require("../models/ProfileModel");
const jwt = require('jsonwebtoken');
//create profile
exports.CreateProfile = (req, res)=> {
    const reqBody = req.body;
    ProfileModel.create(reqBody, (err, data)=> {
        if (err){
            res.status(400).json({status:"Failed", data:err })
        }
        else {
            res.status(201).json({status:"Success", data:data})
        }
    });
};

//user login
exports.UserLogin = (req, res)=> {
    const UserName = req.body['UserName'];
    const Password = req.body['Password'];
   ProfileModel.find({UserName:UserName, Password:Password}, (err,data) => {
       if (err){
           res.status(400).json({status:"Failed", data:err});
       }
       else {
           if (data.length>0){
               // create Auth Token
               const Payload = {exp:Math.floor(Date.now()/1000) + (24*60*60), data:data[0]}
               const token = jwt.sign(Payload, 'Arifuzzaman123456');
               res.status(200).json({status:"Success",token:token,data:data[0]});
           }
           else {
               res.status(401).json({status:"Unauthorized"});
           }
       }
   });
};


// Get user  profile
exports.GetUserProfile = (req, res)=> {
    const UserName = req.headers['username'];
    ProfileModel.find({UserName:UserName}, (err,data) => {
        if (err){
            res.status(400).json({status:"Failed", data:err});
        }
        else {
            res.status(200).json({status:"Success", data:data});
        }
    });
};

// update profile

exports.UpdateUserProfile = (req, res) => {
    const UserName = req.headers['username'];
    const reqBody = req.body;
    ProfileModel.updateOne({UserName:UserName}, {$set:reqBody}, {upsert:true}, (err, data) => {
        if (err){
            res.status(400).json({status:"Failed", data:err});
        }
        else {
            res.status(200).json({status:"Success", data:data});
        }
    });
};