const express = require('express');
const Product = require('../../model/product.model');
// const controller = require('../base/controller')(Product, ['User']);
const controller = require('../base/base.controller')(Product, ['category']);

const router = express.Router();

// get
router.get('/', (req, res, next) => {
    return controller.findAll(req, res, next);
});

router.get('/:id', (req, res, next) => {
    return controller.findOne(req, res, next);
});

router.get('/search/:cat', (req, res, next) => {
    return controller.findByCategory(req, res, next);
});

// patch
router.patch('/:id', (req, res, next) => {
    return controller.updateOne(req, res, next);
});

module.exports = router;

/*
fetch('http://localhost:3000/product', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${temp1.accessToken}`
    },
}).then(r => r.json())
    .then( d => console.log(d) );
*/
