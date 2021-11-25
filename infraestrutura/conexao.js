const mysql = require('mysql')

const conexao = mysql.createConnection({ //Informações necessaria para a conexão com o banco
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'admin',
    database: 'parkvet'
})

module.exports = conexao