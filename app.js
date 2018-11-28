'use strict'
let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let Moment = require('moment')
var moment = require('moment-timezone');
moment().tz("America/Lima").format();

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

let user = require('./Modulo/Usuario/ruta');
let authors = require('./Modulo/Autores/ruta');
let editoriales = require('./Modulo/Ev4/routes');
app.use('/api',authors);
app.use('/api',user);
app.use('/api',editoriales);
app.use(('/'),function(req,res){
    res.status(200).send({
        Message:"Hola amigo que haces aqui ?"
    })
})

module.exports=app;