const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    description: String,
    datasheet:String,
    image:String,
    price:Number,
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
    },
},{
    timestamps:true
});

module.exports = mongoose.model('Product', ProductSchema);