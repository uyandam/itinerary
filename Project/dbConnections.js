var mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

var con = mysql.createConnection({
  host: process.env.HOST,
  user: 'bro',
  password: process.env.PASSWORD,
  port: process.env.PORT
});


con.connect(function(err) {
  if (err) throw err;
  //if  (err) console.log(err);
  console.log("DB online!");
});

//CREATE USER 'uyanda'@'localhost' IDENTIFIED BY 'pagoda';
//GRANT ALL PRIVILEGES ON *.* TO 'uyanda'@'localhost';
//ALTER USER 'bro'@'%' IDENTIFIED WITH mysql_native_password BY 'pagoda'
