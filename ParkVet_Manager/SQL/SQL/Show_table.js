var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "loja"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "SHOW TABLES";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
