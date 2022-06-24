const baseService = require('../base/base.service');
const User = require('../../model/user.model');

const service = baseService(User);

exports.findAll = (req, res, next) => {
    return service.findAll()
        .then( list => res.json(list) );
};