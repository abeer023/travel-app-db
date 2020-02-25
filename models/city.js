//import mongoose as it is dealing with database

const mongoose = require('mongoose');


//create schema on database variable

const Schema = mongoose.Schema;
const CitySchema = new Schema ({
    city: {
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    }    
})

module.exports = User = mongoose.model("city",CitySchema);
