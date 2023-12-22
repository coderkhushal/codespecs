// getting-started.js
const mongoose = require('mongoose');

const productschema = new mongoose.Schema({
    title:{
        type:String, 
        required: true,
    },
    slug:{
        type:String, 
        required: true,
        unique:true
    },
    desc:{
        type:String, 
        required: true,
    },
    
    img:{
        type:String, 
        required: true,
    },
    category:{
        type:String, 
        required: true,
    },
    size:{
        type:String,
    },
    price:{
        type:Number,
        required:true
    },
    colour:{
        type:String, 
    },
    availableQty:{type:Number, required:true},

},{timestamps:true})

module.exports = mongoose.models.Product || mongoose.model("Product", productschema);