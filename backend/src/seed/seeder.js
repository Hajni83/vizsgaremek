const fsp = require('fs/promises');
const {join} = require('path');
const ProductModel = require('../model/product.model');
const userModel = require('../model/user.model');

(async () => {
    const productJson = await fsp.readFile(
        join(__dirname, './products.json'),
        'utf-8',
    );
    const products = JSON.parse(productJson);
    await ProductModel.insertMany(products);
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
    const orderJson = await fsp.readFile(
        join(__dirname, './orders.json'),
        'utf-8',
    );
    const orders = JSON.parse(orderJson);
    await orderModel.insertMany(orders);
})();

(async () => {
    const addressJson = await fsp.readFile(
        join(__dirname, './address.json'),
        'utf-8',
    );
    const address = JSON.parse(addressJson);
    await addressModel.insertMany(address);
})();