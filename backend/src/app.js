const express = require('express');
const httpErrors = require('http-errors');

const config = require('config');
const mongoose = require('mongoose');

const app = express();


const {host, user, pass} = config.get('database');
mongoose.connect(`mongodb+srv://${host}`, {
    user,
    pass
}).then(
    conn => {
        require('./seed/seeder');
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

app.use(express.static('public'));

app.use((req,res,next) => {
    res.send(`<h1>Hello from Express!</h1>`);
});

module.exports = app;