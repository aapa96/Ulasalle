var mysql = require('mysql');

var con = mysql.createConnection({
  host: "172.245.173.170",
  port: '3306',
  user: "ulibrary",
  password: "12345678",
  database: 'library'
});

con.connect(function(err) {
  if (err) {
    throw err;
  }else{
    console.log("Connected!"); 
  }
  
});
 

  module.exports = con;