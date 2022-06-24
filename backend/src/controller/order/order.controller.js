const baseService = require('../base/base.service');
const Order = require('../../model/order.model');

const service = baseService(Order);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};