const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description: String,
    datasheet:String,
    image:String,
    price:Number
},{
    timestamps:true
});

module.exports = mongoose.model('Product', ProductSchema);