'use strict'

let mongoose = require('mongoose');
let app = require('./app');
let port = process.env.PORT || 3977;
let con = require('./db');
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/evidencia2',{useNewUrlParser: true },(err,res) =>{
//     if(err){
//         throw err;
//     }else{
        // app.listen(port,function(){
        //     console.log("Servidor corriendo en el puerto "+ port);
        // })
//     }
// })
 
    app.listen(port,function(){
        console.log("Servidor corriendo en el puerto "+ port);
    })