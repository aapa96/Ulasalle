'use strict'
var db = require('../../db');

let Moment = require('moment')
let bcrypt = require('bcrypt');
const saltRounds = 10;
let jwt = require('./../jwt');

function pruebas(req,res){
    res.status(200).send({
        message:"Controlador user funcionando"
    });
}

function Create(req,res){
    var params = req.body;
    var username = params.username;
    var password;
    var status = "Activo";
    var token = "null";

    if(params.password){
        bcrypt.hash(params.password,saltRounds,function(err,hash){
            password = hash;
            var sql = "INSERT INTO `users`  (username,password,status,token) VALUES ('"+username +"', '"+password+"', '"+status+"', '"+ token +"')";
            db.query(sql,function(error,user){
                if(error){
                    res.status(500).send({error:error});
                }else{
                    if(user){
                        var crud = "INSERT INTO `crud`  (id_table,value) VALUES ('"+
                        user.insertId +"', '"+ "Create User')";
                        Crud(crud);
                        res.status(200).send({user:user});
                    }else{
                        res.status(404).send({Message:"No se pudo registrar"});
                    }
                }
            });
        })
    }else{
        res.status(200).send({message:"Introduce la contrasena"});
    }
}
 
function Login(req,res){
    var params = req.body;
	var username = params.username;
    var password = params.password;
    let sql = "SELECT * FROM `users` WHERE username = '"+username+"'";
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            if(result[0]){
                bcrypt.compare(password,result[0].password,function(err,check){
					if(check){
                        //devolve datos de usuario logueado
                        var crud = "INSERT INTO `crud`  (id_table,value) VALUES ('"+
                        result[0].id +"', '"+ "Login User')";
                        Crud(crud);
						res.status(200).send({	
                            token:jwt.createToken(result[0]),
                            id:result[0].id,
                            username:result[0].username	,
                            status:result[0].status
                        });
					}else{
						res.status(404).send({message:"Usuario no ha podido loguearse"});
					}
				});
            }else{
                res.status(200).send({
                    Message:"Datos incorrectos"
                })
            }
        }
    })
}

function Update(req,res){
    let id = req.params.id;
    var params = req.body;
    var value = params.value;
    var sql = "UPDATE `users` SET `status` = '" + value + "' WHERE id = '" + id + "' ";

    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                err:err
            })
        }else{
            var crud = "INSERT INTO `crud`  (id_table,value) VALUES ('"+
            id +"', '"+ "Update User')";
            Crud(crud);
            res.status(200).send({
                Update:result
            })
        }
    })
}
function Crud(sql){
    db.query(sql, function (err, result) {
        if(err){
            console.log(err);
        }else{
            console.log(result);
        }
    }); 
}




function rfid(req,res){
    var params = req.body;
    var mensaje = params.mensaje;
    var pid = '';
    bcrypt.hash(params.mensaje,saltRounds,function(err,hash){
        if(hash){
            mensaje = hash;
            console.log(hash);
        }else{
            console.log(err);
        }
    })
    res.status(200).send({
        message:mensaje
    })
    
    
}


module.exports = {
    pruebas,
    Create,
    Login,
    Update,
    rfid
}