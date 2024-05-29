// Import
const express = require('express');
const { json } = require('body-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors=require('cors');
const mongoose = require("mongoose");

const userRouter = require('./routes/user');
// const sandeepRouter = require('./routes/sandeep');



//Mongo Database Connection
// TODO: enter your 👇 database name below 
const DB_NAME = "Sandeep";
const URI = "mongodb://127.0.0.1:27017/" + DB_NAME;
mongoose.connect(URI);
mongoose.connection.on("connected", () => {
    console.log("mongodb is connected successfully");
});

// Declaration
const app = express();

// Middle Ware
app.use(logger("tiny"));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('public'));

// Routing
app.use('/user', userRouter);
// app.use('/sandeep',sandeepRouter)

// Export
module.exports = app;