// ----------------------------------------------------------------------------------------------
// 🔖 :  means that should not be missed.  
// ----------------------------------------------------------------------------------------------


// 🔖 imports 
const express = require('express');
const mongoose = require('mongoose');


// ----------------------------------------------------------------------------------------------
//           YOUR MONGOOSE SCHEMA AND MODEL CODE
// ----------------------------------------------------------------------------------------------

// 🔖 Schema code
// 🤔💭 thinks to remember
//       use new keyword       Schema 'S' is capital
//                  👇         👇      
const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    email:String
});
// 🔖 create model out of Schema above.
// 🤔💭 thinks to remember
// 1. mongoose.model(arg1, arg2)   👈 here arg1 is mongodb collection name
//                                 👈  here arg2 is your Schema created above. eg: userSchema
// 2. First letter is capital
//    👇                  
const UserModel = mongoose.model("user", userSchema);


// ----------------------------------------------------------------------------------------------
//           YOUR ROUTER CODE
// ----------------------------------------------------------------------------------------------
// 🔖 create your router as shown below.
const sandeepRouter = express.Router();
// 🔖 your router goes here 👇

// ⚠️ RULES TO FOLLOW WHILE WRITING ROUTER CODE ⚠️
// 1️⃣ your arrow function should start with [ async ] 
// 2️⃣ your database model code always prefix with [ await ]
//     NOTE: Every database model code should prefix with [ await ]
//     Example:   await UserModel.find({})
//     Example:   await UserModel.deleteOne({})

// 🪵 below code is to update the count in document.
sandeepRouter.put('/', async (req, res) => {
    //    payload is just a name for meaningful code.
    //     👇 use below name. payload refers to data coming from client.
    const payload = req.body;
    // 🔖 Every data base operation will return something for sure.
    //    Make sure to check it. Eg. console.log(data);
    //    By this way you can know, what is being stored in variable 'data' 
    
    const condition = {
        username: payload.username
    };
    const newObj = {
        password: payload.password
    };
    const data = await UserModel.updateOne(condition, newObj);
    // 🔖 Finally what to send as response.
    res.json({
        status: true,
        msg: 'update',
        data: data
    });
});

// 🪵 below code is to create new `document` in `collection`
sandeepRouter.post('/', async (req, res) => {
    const payload = req.body;
    const data = await UserModel.create(payload);
    res.json({
        status: true,
        msg: 'create',
        data: data
    });
});


sandeepRouter.get('/',(req,res)=>{
    res.send("Get : Sandeep")
})

// 🔖 in like-route.js always export sandeepRouter alone.
module.exports = sandeepRouter;