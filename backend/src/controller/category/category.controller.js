const baseService = require('../base/base.service');
const Category = require('../../model/category.model');

const service = baseService(Category);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};