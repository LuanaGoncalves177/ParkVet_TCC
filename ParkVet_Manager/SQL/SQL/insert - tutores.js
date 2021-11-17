var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "Loja"
});



//test
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO Pet ( Raca, Especie, Pelo , Porte , Sexo) VALUES ( 'Rotwelver2', 'Dog2', 'Curto2', 'Medio2', 'Masculino2')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});
