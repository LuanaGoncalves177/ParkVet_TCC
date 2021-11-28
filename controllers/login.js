const express = require('express')
const path = require('path')
const body = require('body-parser')
const session = require('express-session')


let rotasLoginFuncionario = require('../rotasLoginFuncionario')
let rotaCadastramento = require('../rotaCadastramento')

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
    app.use('/cadastro', rotaCadastramento)


}
    

