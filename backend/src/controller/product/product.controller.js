const baseService = require('../base/base.service');
const Product = require('../../model/product.model');

const service = baseService(Product);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};