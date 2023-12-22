// getting-started.js
const mongoose = require('mongoose');

const userschema = new mongoose.Schema({
    username:{
        type:String, 
        required: true,
    },
    email:{
        type:String, 
        required: true,
        unique:true
    },
    password:{
        type:String, 
        required: true,
    },
    
    

},{timestamps:true})

module.exports= mongoose.model.User || mongoose.model("User", userschema)