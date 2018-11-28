'use strict'

let express = require('express');
let controlador = require('./controller');
let api = express.Router();

api.post('/editoriales/create',controlador.EditorialesCreate);
api.get('/editoriales/read',controlador.EditorialesRead);
api.get('/editoriales/read/:id',controlador.EditorialesReadOne);
api.put('/editoriales/update',controlador.EditorialesUpdate);
api.delete('/editoriales/delete',controlador.EditorialesDelete);

api.post('/branchs/create',controlador.BranchCreate);
api.get('/branchs/read',controlador.BranchRead);
api.get('/branchs/read/:id',controlador.BranchReadOne);
api.put('/branchs/update',controlador.BranchUpdate);
api.delete('/branchs/delete',controlador.BranchDelete);


api.post('/organizations/create',controlador.OrganizationCreate);
api.get('/organizations/read',controlador.OrganizationRead);
api.get('/organizations/read/:id',controlador.OrganizationReadOne);
api.put('/organizations/update',controlador.OrganizationUpdate);
api.delete('/organizations/delete',controlador.OrganizationDelete);

api.post('/cruds/create',controlador.CrudCreate);
api.get('/cruds/read',controlador.CrudRead);
api.get('/cruds/read/:id',controlador.CrudReadOne);

module.exports = api;