const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({

    customerID:Number,
    productID: Number,
    amount:Number,
    image:String,
    price:Number,
    //status?
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }
},{
    timestamps:true
});

module.exports = mongoose.model('Order', OrderSchema);
