const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({

    address: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address',
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }]
},{
    timestamps:true
});

module.exports = mongoose.model('Order', OrderSchema);
