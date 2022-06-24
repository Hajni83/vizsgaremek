const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    first_name:String,
    last_name: String,
    email:String,
    password:String,
    role:Number,
    token:String
},{
    timestamps:true
});

module.exports = mongoose.model('User', UserSchema);

