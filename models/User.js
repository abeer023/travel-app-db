//import mongoose as it is dealing with database

const mongoose = require('mongoose');


//create schema on database variable

const Schema = mongoose.Schema;

const UserSchema = new Schema ({

    name : {

        type : String,

        required : true

    },

    date : {

        type : Date,

        default : Date.now

    }
    
});

//export your schema as User

module.exports = User = mongoose.model("users",UserSchema);
