const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({

    first_name:String,
    last_name: String,
    email: {
        type: String,
        required: true,
        index: {
            unique: true,
        },
    },
    role:Number,
    token:String
},{
    timestamps:true
});

UserSchema.plugin(require('mongoose-bcrypt'));

module.exports = mongoose.model('User', UserSchema);

