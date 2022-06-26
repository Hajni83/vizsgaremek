const express = require('express');
const httpErrors = require('http-errors');
const cors = require('cors');
const config = require('config');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const mongoose = require('mongoose');

const swaggerDocument = YAML.load('./src/docs/swagger.yaml');

const app = express();

const {host, user, pass} = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass
}).then(
    conn => {
        // require('./seed/seeder');
        console.log('Database is seeded!');
    }
).catch(
    err => console.error(err),
);

//Logger
app.use((req,res,next) => {
    const message = `${req.method} ${req.url} ${new Date()}`;
    console.log(message);

    next();
});
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

const authencticateJwt = require('./model/auth/authenticate');

app.use('/products', require('./controller/product/product.router'));
app.use('/login', require('./controller/login/login.router'));
app.use('/orders', authencticateJwt, require('./controller/order/order.router'));
app.use('/addresses', require('./controller/address/address.router'));
app.use('/users', require('./controller/user/user.router'));
app.use('/categories', require('./controller/category/category.router'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



module.exports = app;