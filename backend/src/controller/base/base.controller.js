const express = require("express");
const baseService = require("../base/base.service");

module.exports = (model, populateList = []) => {
    const service = baseService(model, populateList);
    return {
        findAll(req, res, next) {
            return service.findAll()
                .then(list => res.json(list));
        },
        findOne(req, res, next) {
            return service.findOne(req.params.id)
                .then(entity => res.json(entity));
        },
        updateOne(req, res, next) {
            return service.updateOne(req.params.id, req.body)
                .then(entity => res.json(entity))
                .catch(err => {
                    res.statusCode = 500;
                    res.json(err);
                });
        },
        create(req, res, next) {
            return service.create(req.body)
                .then(entity => res.json(entity))
                .catch(err => {
                    res.statusCode = 500;
                    res.json(err);
                });
        },
        findByCategory(req, res, next) {
            return service.findByCategory(req.params.cat)
                .then(list => res.json(list));
        },
        delete(req, res, next) {
            return service.delete(req.params.id)
            .then(entity => res.json(entity));
        }
    };
};

