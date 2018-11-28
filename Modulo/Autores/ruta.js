'use strict'

let express = require('express');
let controlador = require('./controlador');
let api = express.Router();
var md_auth = require('../authenticated');

api.get('/test-crud',controlador.pruebas);

api.post('/authors',md_auth.ensureAuth,controlador.Create);
api.get('/authors',md_auth.ensureAuth,controlador.ReadAll);
api.get('/authors/:id',md_auth.ensureAuth,controlador.ReadOne);
api.put('/authors/:id',md_auth.ensureAuth,controlador.Update);
api.put('/authorsAll',md_auth.ensureAuth,controlador.UpdateAll);
api.delete('/authors/:id',md_auth.ensureAuth,controlador.Delete);
api.delete('/authorsAll',md_auth.ensureAuth,controlador.deleteAll);
module.exports = api;