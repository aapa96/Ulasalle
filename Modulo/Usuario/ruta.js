'use strict'

let express = require('express');
let controlador = require('./controlador');
let api = express.Router();
var md_auth = require('../authenticated');
api.get('/user',controlador.pruebas);
api.post('/user',controlador.Create);
api.post('/user/login',controlador.Login);
api.put('/user/:id',md_auth.ensureAuth,controlador.Update);

api.post('/rfid',controlador.rfid);
module.exports = api;