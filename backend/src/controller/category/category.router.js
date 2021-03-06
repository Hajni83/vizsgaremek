const express = require('express');
const Category = require('../../model/category.model');
// const controller = require('../base/controller')(Product, ['User']);
const controller = require('../base/base.controller')(Category);

const router = express.Router();

// get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next);
});

// patch
router.patch('/:id', (req, res, next) => {
    return controller.updateOne(req, res, next);
});

module.exports = router;