const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require("./infraestrutura/Tabelas")
const body = require("body-parser")
const session = require("express-session")
const express = require('express')
const path = require('path')

let rotasLoginFuncionario = require('./rotasLoginFuncionario')
let rotaCadastramento = require('./rotaCadastramento')
let rotaServicoEpacotes = require('./rotaServicosEpacotes')
let rotaAgenda = require("./rotaAgenda")
let rotaAtualizarInfo = require("./rotaAtualizarInfo")


//conexao.connect(erro => {
//    if(erro){
//        console.log("ERRO:" + erro)
 //   }else{

        const app = customExpress()
        app.use(body.urlencoded({extended:true}));
        app.use(body.json())

        app.use(session({
            secret: "cookie_secret",
            resave: true,
            saveUninitialized:true}));

        app.engine('html', require('ejs').renderFile);
        app.set('view engine','html')
        app.use('/Public', express.static(path.join(__dirname, 'Public')))
        app.set(path.join(__dirname,'/Views'))
    
        console.log("Conectado com sucesso")
        //Tabelas.init(conexao)
        
        app.get('/', (req, res)=>{
            res.render('index')
        })
    
        app.use('/manager', rotasLoginFuncionario)
        app.use('/manager/cadastro', rotaCadastramento)
        app.use('/manager/', rotaServicoEpacotes)
        app.use('/manager', rotaAgenda)
        app.use('/manager', rotaAtualizarInfo)
        
        app.listen(4000,() => console.log("Deu Certo"))

   // }
//})