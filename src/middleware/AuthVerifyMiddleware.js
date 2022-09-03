const jwt = require('jsonwebtoken');
const {request} = require("express");


module.exports = (req,res,next) => {

    const Token = req.headers['token-key'];

    jwt.verify(Token, "Arifuzzaman123456", function (err, decoded) {
        if (err){
            res.status(401).json({status:"Unauthorized"});
        }
        else {
            // Get user name from decoded token & request to header
            const username = decoded['data']['UserName'];
            req.headers.username = username ;
            next();
        }
    });
};