var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "bro",
  password: "pagoda",
  port: 3306
});

con.connect(function(err) {
  if (err) throw err;
  //if  (err) console.log(err);
  console.log("DB online!");
});

//CREATE USER 'uyanda'@'localhost' IDENTIFIED BY 'pagoda';
//GRANT ALL PRIVILEGES ON *.* TO 'uyanda'@'localhost';
//ALTER USER 'bro'@'%' IDENTIFIED WITH mysql_native_password BY 'pagoda'
