const baseService = require('../base/base.service');
const Order = require('../../model/address.model');

const service = baseService(Address);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};