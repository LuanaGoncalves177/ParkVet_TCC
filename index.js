//--------------------- IMPORTAÇÕES DE BIBLIOTECAS -----------------------------------------
const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require("./infraestrutura/Tabelas")
const body = require("body-parser")
const session = require("express-session")
const express = require('express')
const path = require('path')
const cors = require('cors')
//------------------------------- IMPORTANDO ROTAS -------------------------------------------
let rotasLoginFuncionario = require('./rotasManager/rotasLoginFuncionario')
let rotaCadastramento = require('./rotasManager/rotaCadastramento')
let rotaServicoEpacotes = require('./rotasManager/rotaServicosEpacotes')
let rotaAgenda = require("./rotasManager/rotaAgenda")
let rotaAtualizarInfo = require("./rotasManager/rotaAtualizarInfo")
let rotaVenda = require('./rotasManager/rotaVenda')
let rotaPagamento = require('./rotasManager/rotaPagamento')
let rotaPacote = require('./rotasManager/rotaPacote')

//----------------------------- CONEXAO DO SERVIDOR E CONFIGURAÇÃO----------------------------------
const app = customExpress()
app.use(cors())
app.use(body.urlencoded({extended:true}));
app.use(body.json()) //Converte tudo o que chega do boby em json

//SESSÃO DE LOGIN
app.use(session({
    secret: "cookie_secret",
    resave: true,
    saveUninitialized:true}));

app.engine('html', require('ejs').renderFile);
app.set('view engine','html')
app.use('/Public', express.static(path.join(__dirname, 'Public')))
app.set(path.join(__dirname,'/Views'))


//------------ROTA INICIAL DO SITE
app.get('/', (req, res)=>{
    res.render('index')
})

//--------------------------------------- ROTAS DO MANAGER
app.use('/', rotasLoginFuncionario)
app.use('/manager/cadastro', rotaCadastramento)
app.use('/manager/', rotaServicoEpacotes)
app.use('/manager', rotaPagamento)
app.use('/manager', rotaAgenda)
app.use('/manager', rotaAtualizarInfo)
app.use('/manager', rotaVenda)
app.use('/manager', rotaPacote)


app.listen(4000,() => console.log("Deu Certo"))

// ------------------- IMPORTAÇÃO DO APP
module.exports = app
