var db = require('../../db');
let Moment = require('moment')

function pruebas(req,res){
    res.status(200).send({
        message:"Controlador crud funcionando"
    });
}


function Create(req,res){
// DATE -> 2018-10-03
    let params = req.body;
    var name = params.name;
    var email = params.email;
    var gender = params.gender;
    var birth = Moment(params.birth).format("YYYY-MM-DD");
    var address = params.address;
    var pweb = params.pweb;
    var status = params.status;


    var sql = "INSERT INTO `authors`  (name,email,gender,birth,address,pweb,status) VALUES ('"+
            name +"', '"+
            email +"', '"+
            gender +"', '"+
            birth +"', '"+
            address +"', '"+
            pweb +"', '"+
            status +"')";
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            var crud = "INSERT INTO `crud`  (id_table,value) VALUES ('"+
            result.insertId +"', '"+ "Create Authors')";
            Crud(crud);
            res.status(200).send({
                Author:result
            });
        }
    }); 
}


function ReadAll(req,res){
    let sql = "SELECT * FROM `authors`"; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Authors: result
            });
        }
    }); 
}

function ReadOne(req,res){
    let id = req.params.id;
    let sql = "SELECT * FROM `authors` WHERE id = " + id; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            
            res.status(200).send({
                Author:result
            });
        }
    }); 
}

function Update(req,res){
    let params = req.body;
    let id = req.params.id;
    var name = params.name;
    var email = params.email;
    var gender = params.gender;
    var birth = Moment(params.birth).format("YYYY-MM-DD");
    var address = params.address;
    var pweb = params.pweb;
    var status = params.status;
    var sql = "UPDATE `authors` SET"+ 
            " `name` = '" + name + "',"+
            " `email` = '" + email +  "',"+
            " `gender` = '" + gender +  "',"+
            " `birth` = '" + birth +  "',"+
            " `address` = '" + address +  "',"+
            " `pweb` = '" + pweb +  "',"+
            " `status` = '" + status +  "'"+
            " WHERE id = '" + id + "' ";
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            var crud = "INSERT INTO `crud`  (id_table,value) VALUES ('"+
            id +"', '"+ "Update Authors')";
            Crud(crud);
            res.status(200).send({
                Author:result
            });
        }
    }); 
}

function UpdateAll(req,res){
    let params = req.body;
    let id = req.params.id;
    var name = params.name;
    var email = params.email;
    var gender = params.gender;
    var birth = Moment(params.birth).format("YYYY-MM-DD");
    var address = params.address;
    var pweb = params.pweb;
    var status = params.status;
    var sql = "UPDATE `authors` SET"+ 
            " `status` = '" + status +  "'";
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            var crud = "INSERT INTO `crud`  (id_table,value) VALUES ('"+
            0 +"', '"+ "Update All Authors')";
            Crud(crud);
            res.status(200).send({
                Author:result
            });
        }
    }); 
}

function Delete(req,res){
    let id = req.params.id;
    let sql = "DELETE FROM `authors` WHERE id = " + id; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            var crud = "INSERT INTO `crud`  (id_table,value) VALUES ('"+
            0 +"', '"+ "Delete Authors')";
            Crud(crud);
            res.status(200).send({
                Author:result
            });
        }
    }); 
}

function deleteAll(req,res){
    let sql = "DELETE FROM `authors`"; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            var crud = "INSERT INTO `crud`  (id_table,value) VALUES ('"+
            id +"', '"+ "Delete All Authors')";
            Crud(crud);
            res.status(200).send({
                Author:result
            });
        }
    }); 
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

module.exports = {
    pruebas,
    Create,
    ReadAll,
    ReadOne,
    Update,
    UpdateAll,
    Delete,
    deleteAll
}

//INSERT INTO `crud` (`id`, `id_table`, `value`, `time_date`) VALUES (NULL, '', '', '')