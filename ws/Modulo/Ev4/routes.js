'use strict'

let express = require('express');
let controlador = require('./controller');
let api = express.Router();

api.post('/user/create',controlador.saveUser);
api.post('/user/login',controlador.loginUser);
api.put('/user/update',controlador.UserUpdate);
api.get('/user/read/:id',controlador.UsersReadOne);

api.post('/editoriales/create',controlador.EditorialesCreate);
api.get('/editoriales/read',controlador.EditorialesRead);
api.get('/editoriales/read/:id',controlador.EditorialesReadOne);
api.put('/editoriales/update',controlador.EditorialesUpdate);
api.delete('/editoriales/delete/:id',controlador.EditorialesDelete);

api.post('/branchs/create',controlador.BranchCreate);
api.get('/branchs/read',controlador.BranchRead);
api.get('/branchs/read/:id',controlador.BranchReadOne);
api.put('/branchs/update',controlador.BranchUpdate);
api.delete('/branchs/delete/:id',controlador.BranchDelete);


api.post('/organizations/create',controlador.OrganizationCreate);
api.get('/organizations/read',controlador.OrganizationRead);
api.get('/organizations/read/:id',controlador.OrganizationReadOne);
api.put('/organizations/update',controlador.OrganizationUpdate);
api.delete('/organizations/delete/:id',controlador.OrganizationDelete);

api.post('/cruds/create',controlador.CrudCreate);
api.get('/cruds/read',controlador.CrudRead);
api.get('/cruds/read/:id',controlador.CrudReadOne);


api.post('/copies/create',controlador.CopiesCreate);
api.get('/copies/read',controlador.CopiesRead);
api.get('/copies/read/:id',controlador.CopiesReadOne);
api.put('/copies/update',controlador.CopiesUpdate);
api.delete('/copies/delete/:id',controlador.CopiesDelete);

api.post('/access/create',controlador.AccessCreate);
api.get('/access/read',controlador.AccessRead);
api.get('/access/read/:id',controlador.AccessReadOne);
api.put('/access/update',controlador.AccessUpdate);
api.delete('/access/delete/:id',controlador.AccessDelete);

module.exports = api;