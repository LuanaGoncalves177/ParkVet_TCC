var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "Loja"
});


con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Tutores (idTutor INT AUTO_INCREMENT PRIMARY KEY, NomeTutor VARCHAR(255), Endereco VARCHAR(255), Email VARCHAR(255), whatapp VARCHAR(255), Telefone_Fixo VARCHAR(255), Autorizacao_Mensagem VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Tutores created");
  });
});



con.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE TABLE Pet (idPet INT AUTO_INCREMENT PRIMARY KEY, Raca VARCHAR(50), Especie VARCHAR(50), Pelo VARCHAR(50), Porte VARCHAR(50), Sexo VARCHAR(50), idTutor INT)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Pet created");
  });
});



con.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE TABLE ServicoContratado (idTutor INT, IdPet INT, IdFuncionario INT, dataCriaçao VARCHAR(10), dataServiço VARCHAR(10), HoraServiço VARCHAR(10), IdServiçoCadastrado INT PRIMARY KEY)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table ServicoContratado created");
  });
});



con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE Funcionario (IdFuncionario INT, NomeFuncionario VARCHAR(255), Funçao VARCHAR(255), Salario VARCHAR(255), DataSalario VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Funcionario created");
  });
});



con.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE TABLE Despesas (IdDespesas INT AUTO_INCREMENT PRIMARY KEY, Descriçao VARCHAR(255), DataPagamentoDespesas VARCHAR(255), Total VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Despesas created");
  });
});


con.connect(function(err) {
  if (err) throw err;
  var sql = "CREATE TABLE Serviço (IdServiço INT AUTO_INCREMENT PRIMARY KEY, Descriçao VARCHAR(255), ValorServiço VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table Serviço created");
  });
});


/* --------------------------------------------------------------------------------------------------------------
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE test (idPet INT NOT NULL PRIMARY KEY, Raca VARCHAR(50), Especie VARCHAR(50), Pelo VARCHAR(50), Porte VARCHAR(50), Sexo VARCHAR(50))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
-------------------------------------------------------------------------------------------------------------- */ 