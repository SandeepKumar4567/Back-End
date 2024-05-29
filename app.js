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
const DB_USERNAME = "sandeep";
const DB_PASSWORD = "WPYUgmyKeJ6L0Bji";
const DB_NAME = "spotify-playlist";
const URI = `mongodb+srv://${DB_USERNAME}:${DB_PASSWORD}@cluster0.mcfdnaj.mongodb.net/${DB_NAME}`;
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