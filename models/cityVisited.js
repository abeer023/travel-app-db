//import mongoose as it is dealing with database

const mongoose = require('mongoose');


//create schema on database variable

const Schema = mongoose.Schema;
const CityVisitedSchema = new Schema ({
    city: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    }  
})

module.exports = User = mongoose.model("cityVisited",CityVisitedSchema);
