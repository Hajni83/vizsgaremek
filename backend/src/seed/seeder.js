const fsp = require('fs/promises');
const {join} = require('path');
const productModel = require('../model/product.model');
const userModel = require('../model/user.model');
const orderModel = require('../model/order.model');
const addressModel = require('../model/address.model');
const categoryModel = require('../model/category.model');


(async () => {
    const productJson = await fsp.readFile(
        join(__dirname, './products.json'),
        'utf-8',
    );
    const products = JSON.parse(productJson);
    await productModel.insertMany(products);
})();

(async () => {
    const userJson = await fsp.readFile(
        join(__dirname, './users.json'),
        'utf-8',
    );
    const users = JSON.parse(userJson);
    await userModel.insertMany(users);
})();

(async () => {
    const categoryJson = await fsp.readFile(
        join(__dirname, './category.json'),
        'utf-8',
    );
    const category = JSON.parse(categoryJson);
    await categoryModel.insertMany(category);
})();