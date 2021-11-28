const express = require('express')
const path = require('path')
const body = require('body-parser')
const session = require('express-session')
const router = require('express').Router


module.exports = app => {
    app.use(body.urlencoded({extended:true}));
    app.use(session({
        secret: "cookie_secret",
        resave: true,
        saveUninitialized:true}));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine','html')
    app.use('/Public', express.static(path.join(__dirname, 'Public')))
    app.set('index', path.join(__dirname,'/Views'))

    var login = "001"
    var password = "12345"
    
    //app.get('/', (req, res)=> {
    //    res.render('index')
    //})

    //fazer o redirecionamento para /manager ou /administrador 
//-----------------------------
function Rota(){
    router.get('/manager', (req, res) =>{
        if(req.body.senha == password && req.body.login == login){
            //app.use(passport.session())
            
            req.session.login = login
        }
        res.render("cadastro")
    } )
    router.use('/cadastro')

}

//----------------------------
    app.get('/manager', (req, res)=> {
        res.render('manager')
    })

    app.post('/manager', Rota())

    app.get('/manager', (req, res)=> {
        if(req.session.login){
            res.render("cadastro")
        }else{
            res.render('manager')
        }

    //app.get('/manager/cadastro', (req, res)=>{
      //  res.render(cadastro)
    //})
    
    })      

}
    

