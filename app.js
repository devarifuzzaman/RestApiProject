// Lib = Library

// Basic Lib Import
const express = require('express');
const router = require('./src/routes/api');
const app = new express();
const bodyParser = require('body-parser');

// Security Middleware lib Import
const mongoSanitizer = require('express-mongo-sanitize');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');


//Database lib Import
const mongoose = require ('mongoose');

// Security Middleware Implement
app.use(mongoSanitizer());
app.use(helmet());
app.use(cors());
app.use(xss());
app.use(hpp());

//Body Parser Implement
app.use(bodyParser.json());

//Request Rate limit
const limiter = rateLimit({windowMs: 15 * 60 * 1000, max: 3000});
app.use(limiter);


// MongoDB Database Connection

const URI = "mongodb://localhost:27017/Todo";
const OPTION = {user: '', pass: '', autoIndex:true}


mongoose.connect(URI,OPTION,(error) => {
    console.log("Connection Run Successfully");
    console.log(error);
});



// Routing Implement
app.use("/api/v1", router);

// Undefined Routing Implement
app.use("*", (req, res) => {
    res.status(404).json({status:"Failed", data: "Not Found"});
});

module.exports = app;