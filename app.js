'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let Moment = require('moment')
var moment = require('moment-timezone');

let app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT , DELETE');
    res.header('Allow','GET,POST,OPTIONS,PUT,DELETE');
    next();
});

let editoriales = require('./Modulo/Ev4/routes');

app.use('/api',editoriales);
module.exports=app;