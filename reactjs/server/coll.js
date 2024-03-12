const mongoose = require("mongoose");
require('dotenv').config()



//Schema
const roomdata=mongoose.Schema({
    roomid:{
        type:String
    },
    code:{
        type:String,
        default:""
    },
    username:[{
        type:String
    }]
})


//Collection
const rdata=mongoose.model(process.env.DATA_MODEL,roomdata);

module.exports =  rdata;