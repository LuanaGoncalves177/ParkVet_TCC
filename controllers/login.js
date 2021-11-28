const express = require('express')
const path = require('path')
const body = require('body-parser')
const session = require('express-session')


let rotasLoginFuncionario = require('../rotasLoginFuncionario')
let rotaCadastramento = require('../rotaCadastramento')
let rotaServicoEpacotes = require('../rotaServicosEpacotes')
let rotaAgenda = require("../rotaAgenda")
let rotaAtualizarInfo = require("../rotaAtualizarInfo")

module.exports = app => {
    app.use(body.urlencoded({extended:true}));
    
    app.use(session({
        secret: "cookie_secret",
        resave: true,
        saveUninitialized:true}));

    app.engine('html', require('ejs').renderFile);
    app.set('view engine','html')
    app.use('/Public', express.static(path.join(__dirname, 'Public')))
    app.set(path.join(__dirname,'/Views'))
    

    app.get('/', (req, res)=>{
        res.render('index')
    })

    app.use('/manager', rotasLoginFuncionario)
    app.use('/manager/cadastro', rotaCadastramento)
    app.use('/manager/', rotaServicoEpacotes)
    app.use('/manager', rotaAgenda)
    app.use('/manager', rotaAtualizarInfo)

}
    

