'use strict'
var db = require('../../db');
let Moment = require('moment')
var bcrypt = require('bcrypt-nodejs');
var jwt = require('./jwt');

function pruebas(req,res){
    res.status(200).send({
        message:"Controlador crud funcionando"
    });
}
function saveUser(req,res){
    let params = req.body;
    var userName = params.userName;
    var password = params.password;
	var estatus = params.estatus;
	var birth = Moment(params.birth).format("YYYY-MM-DD");
	var gender = params.gender
    var role_id= params.role_id;
    console.log(params);
    bcrypt.hash(params.password,null,null,function(err,hash){
        password = hash;
        var sql = "INSERT INTO `users`  (userName,password,estatus,birth,gender,role_id) VALUES ('"+
            userName +"', '"+
            password +"', '"+
            estatus +"', '"+
            birth +"', '"+
            gender +"', '"+
            role_id +"')";
        console.log(sql);
    
        db.query(sql, function (err, result) {
            if(err){
                console.log(err)
                res.status(500).send({
                    Message:err
                    
                })
            }else{
                res.status(200).send({
                    Users:result
                });
            }
        });  
    });

}
function loginUser(req,res){
	var params = req.body;
	var userName = params.userName;
    var password = params.password;
    

    let sql = "SELECT * FROM `users` WHERE userName = '" + userName + "'" ;

    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            var user = result;
            bcrypt.compare(password,user.password,(err,resp)=>{
                res.status(200).send({
                    token:jwt.createToken(user),
                    user:user.id
                });
            })
        }
    })
}



function EditorialesCreate(req,res){
    // DATE -> 2018-10-03
    let params = req.body;
    var name = params.name;
    var address = params.address;
    var status = params.status;
    var country = params.country;
    var website = params.website;
    var date = Moment(params.date).format("YYYY-MM-DD");




    var sql = "INSERT INTO `editoriales`  (name,address,status,country,website,created) VALUES ('"+
            name +"', '"+
            address +"', '"+
            status +"', '"+
            country +"', '"+
            website +"', '"+
            date +"')";
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Editorial:result
            });
        }
    }); 
}

function EditorialesRead(req,res){
    let sql = "SELECT * FROM `editoriales`";
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Editoriales:result
            });
        }
    })
}
function EditorialesReadOne(req,res){
    let id = req.params.id;
    let sql = "SELECT * FROM `editoriales` WHERE id = " + id; 
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Editorial:result
            });
        }
    })
}
function EditorialesUpdate(req,res){
    let params = req.body;
    var id = params.id;
    var name = params.name;
    var address = params.address;
    var status = params.status;
    var country = params.country;
    var website = params.website;
    var date = Moment(params.date).format("YYYY-MM-DD");


    var sql = "UPDATE `editoriales` SET"+ 
    " `name` = '" + name + "',"+
    " `address` = '" + address +  "',"+
    " `status` = '" + status +  "',"+
    " `country` = '" + country +  "',"+
    " `website` = '" + website +  "',"+
    " `created` = '" + date +  "'"+
    " WHERE id = '" + id + "' ";

    db.query(sql, function (err, result) {
    if(err){
        res.status(500).send({
            Message:err
        })
    }else{ 
        res.status(200).send({
            Editorial:result
        });
    }
    }); 
}
function EditorialesDelete(req,res){
    let id = req.params.id;
    let sql = "DELETE FROM `editoriales` WHERE id = " + id; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Editorial:result
            });
        }
    }); 
}



function BranchCreate(req,res){
    let params = req.body;
    var name = params.name;
    var address = params.address;
    var latitude = params.latitude;
    var longitude = params.longitude;
    var status = params.status;

    var sql = "INSERT INTO `branchs`  (name,address,latitude,longitude,status) VALUES ('"+
            name +"', '"+
            address +"', '"+
            latitude +"', '"+
            longitude +"', '"+
            status +"')";

    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Branch:result
            });
        }
    }); 
    
    

}
function BranchRead(req,res){
    let sql = "SELECT * FROM `branchs`";
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Branchs:result
            });
        }
    })
}
function BranchReadOne(req,res){
    let id = req.params.id;
    let sql = "SELECT * FROM `branchs` WHERE id = " + id; 
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Branch:result
            });
        }
    })
}
function BranchUpdate(req,res){
    let params = req.body;
    var id = params.id;
    var name = params.name;
    var address = params.address;
    var latitude = params.latitude;
    var longitude = params.longitude;
    var status = params.status;


    var sql = "UPDATE `branchs` SET"+ 
    " `name` = '" + name + "',"+
    " `address` = '" + address +  "',"+
    " `latitude` = '" + latitude +  "',"+
    " `longitude` = '" + longitude+  "',"+
    " `status` = '" + status +  "'"+
    " WHERE id = '" + id + "' ";

    db.query(sql, function (err, result) {
    if(err){
        res.status(500).send({
            Message:err
        })
    }else{ 
        res.status(200).send({
            Branch:result
        });
    }
    }); 
}
function BranchDelete(req,res){
    let id = req.params.id;
    let sql = "DELETE FROM `branchs` WHERE id = " + id; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Branch:result
            });
        }
    }); 
}




function OrganizationCreate(req,res){
    let params = req.body;
    var name = params.name;
    var status = params.address;
    var created = Moment(params.date).format("YYYY-MM-DD");

    var sql = "INSERT INTO `organizations`  (name,status,created) VALUES ('"+
            name +"', '"+
            status +"', '"+
            created +"')";

    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Organization:result
            });
        }
    }); 
}
function OrganizationRead(req,res){
    let sql = "SELECT * FROM `organizations`";
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Organizations:result
            });
        }
    })
}
function OrganizationReadOne(req,res){
    let id = req.params.id;
    let sql = "SELECT * FROM `organizations` WHERE id = " + id; 
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Organization:result
            });
        }
    })
}
function OrganizationUpdate(req,res){
    let params = req.body;
    var name = params.name;
    var id = params.id;
    var status = params.status;

    var sql = "UPDATE organizations SET"+ 
    " name = '" + name + "',"+
    " status = '" + status+  "'"+
    " WHERE id = '" + id +"'";

    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Organization:result
            });
        }
    }); 
}
function OrganizationDelete(req,res){
    let id = req.params.id;
    let sql = "DELETE FROM `organizations` WHERE id = " + id; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Branch:result
            });
        }
    }); 
}


function CrudCreate(req,res){
    let params = req.body;
    var user_id = params.user_id;
    var type = params.type;
    var entity = params.entity;
    var batch = 1;

    var sql = "INSERT INTO `cruds`  (user_id,type,entity,batch) VALUES ('"+
            
            user_id +"', '"+
            type +"', '"+
            entity +"', '"+
            batch +"')";

    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Crud:result
            });
        }
    });    
}

function CrudRead(req,res){
    let sql = "SELECT * FROM `cruds`";
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Cruds:result
            });
        }
    })
}
function CrudReadOne(req,res){
    let id = req.params.id;
    let sql = "SELECT * FROM `cruds` WHERE id = " + id; 
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Crud:result
            });
        }
    })
}


function CopiesCreate(req,res){
    let params = req.body;
    var article_id = params.article_id;
    var branch_id = params.branch_id;
    var status = params.status;
    var available = params.available;
    var details = params.details;


    var sql = "INSERT INTO `copies`  (article_id,branch_id,status,available,details) VALUES ('"+
            article_id +"', '"+
            branch_id +"', '"+
            status +"', '"+
            available +"', '"+
            details +"')";
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies:result
            });
        }
    }); 
}
function CopiesRead(req,res){
    let sql = "SELECT * FROM `copies`";
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies:result
            });
        }
    })
}
function CopiesReadOne(req,res){
    let id = req.params.id;
    let sql = "SELECT * FROM `copies` WHERE id = " + id; 
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies:result
            });
        }
    })
}
function CopiesUpdate(req,res){
	let params = req.body;
	var id = params.id;
    var article_id = params.article_id;
    var branch_id = params.branch_id;
    var status = params.status;
    var available = params.available;
	var created = Moment(params.created).format("YYYY-MM-DD");
	var modified = Moment(params.modified).format("YYYY-MM-DD");
    var details = params.details;


    var sql = "UPDATE `copies` SET"+ 
    " `article_id` = '" + article_id + "',"+
    " `branch_id` = '" + branch_id +  "',"+
    " `status` = '" + status +  "',"+
    " `available` = '" + available +  "',"+
    " `details` = '" + details +  "',"+
    " WHERE id = '" + id + "' ";

    db.query(sql, function (err, result) {
    if(err){
        res.status(500).send({
            Message:err
        })
    }else{ 
        res.status(200).send({
            Copies:result
        });
    }
    }); 
}
function CopiesDelete(req,res){
    let id = req.params.id;
    let sql = "DELETE FROM `copies` WHERE id = " + id; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies:result
            });
        }
    }); 
}
function AccessCreate(req,res){
	
	let params = req.body;
	var created= Moment(params.created).format("YYYY-MM-DD");
    var ip = params.ip;
	var user_id = params.user_id;
    var user_agent = params.user_agent;

    var sql = "INSERT INTO `access`  (ip,user_id,user_agent) VALUES ('"+
            ip +"', '"+
            user_id +"', '"+
            user_agent +"', '"+
            "')";

    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Access:result
            });
        }
    }); 
    
    

}
function AccessRead(req,res){
    let sql = "SELECT * FROM `access`";
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Access:result
            });
        }
    })
}
function AccessReadOne(req,res){
    let id = req.params.id;
    let sql = "SELECT * FROM `access` WHERE id = " + id; 
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Access:result
            });
        }
    })
}
function AccessUpdate(req,res){
	let params = req.body;
	var id=params.id;
	var created= Moment(params.created).format("YYYY-MM-DD");
    var ip = params.ip;
	var user_id = params.user_id;
    var user_agent = params.user_agent;

    var sql = "UPDATE `access SET"+ 
    " `ip = '" + ip +  "',"+
    " `user_id` = '" + user_id +  "',"+
    " `user_agent` = '" + user_agent+  "',"+ "' ";
	" WHERE id = '" + id + "' ";

    db.query(sql, function (err, result) {
    if(err){
        res.status(500).send({
            Message:err
        })
    }else{ 
        res.status(200).send({
            Access:result
        });
    }
    }); 
}
function AccessDelete(req,res){
    let id = req.params.id;
    let sql = "DELETE FROM `access` WHERE id = " + id; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Access:result
            });
        }
    }); 
}

function Copies_usersCreate(req,res){
    let params = req.body;
    var user_id= params.user_id;
    var finish= Moment(params.finish).format("YYYY-MM-DD");
    var status= params.status;

    var sql = "INSERT INTO `copies_users`  (user_id,finish,status) VALUES ('"+
            
            user_id +"', '"+
            finish +"', '"+
            status +"')";

    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies_users:result
            });
        }
    });    
}

function Copies_usersRead(req,res){
    let sql = "SELECT * FROM `copies_users`";
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies_users:result
            });
        }
    })
}
function Copies_usersReadOne(req,res){
    let id = req.params.id;
    let sql = "SELECT * FROM `copies_users` WHERE id = " + id; 
    db.query(sql,function(err,result){
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies_users:result
            });
        }
    })
}
function Copies_usersUpdate(req,res){
	let params = req.body;
	var id= params.id;
    var user_id= params.user_id;
    var finish= Moment(params.finish).format("YYYY-MM-DD");
    var status= params.status;

    var sql = "UPDATE `users` SET"+ 
    " `user_id` = '" + user_id + "',"+
    " `finish` = '" + finish+  "',"+
	" `status` = '" + status+  "',"+
    " WHERE id = '" + id + "' ";

    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies_users:result
            });
        }
    }); 
}
function Copies_usersDelete(req,res){
    let id = req.params.id;
    let sql = "DELETE FROM `copies_users` WHERE id = " + id; // query database to get all the players
    db.query(sql, function (err, result) {
        if(err){
            res.status(500).send({
                Message:err
            })
        }else{
            res.status(200).send({
                Copies_users:result
            });
        }
    }); 
}


module.exports ={

    saveUser,
    loginUser,

    EditorialesCreate,
    EditorialesRead,
    EditorialesReadOne,
    EditorialesUpdate,
    EditorialesDelete,

    BranchCreate,
    BranchRead,
    BranchReadOne,
    BranchUpdate,
    BranchDelete,

    OrganizationCreate,
    OrganizationRead,
    OrganizationReadOne,
    OrganizationUpdate,
    OrganizationDelete,

    CrudCreate,
    CrudRead,
    CrudReadOne,

    CopiesCreate,
    CopiesRead,
    CopiesReadOne,
    CopiesUpdate,
    CopiesDelete,

    AccessCreate,
    AccessRead,
    AccessReadOne,
    AccessUpdate,
    AccessDelete,

    Copies_usersCreate,
    Copies_usersRead,
    Copies_usersReadOne,
    Copies_usersUpdate,
    Copies_usersDelete
    


}