var express = require('express');
var app = express();
var db = require('./db');
var bodyParser = require('body-parser');
var petrolimexController = require('./Controller/petrolimexController');
var provincesController = require('./Controller/provincesController')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Content-Type", "application/json");
    next();
});

app.use('/',petrolimexController)
app.use('/',provincesController)

module.exports = app;


