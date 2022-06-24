const mongoose = require('mongoose');

const AddressSchema = mongoose.Schema({

    country:String,
    city: String,
    street:String,
    notes:String,
    
},{
    timestamps:true
});

module.exports = mongoose.model('Address', AddressSchema);
