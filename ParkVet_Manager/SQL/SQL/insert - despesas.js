var mysql = require('mysql2');
const fs = require('fs');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "Loja"
});


let rawdata = fs.readFileSync('despesas.json');
let despesas = JSON.parse(rawdata);
console.log(despesas);
 