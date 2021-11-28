const express = require('express')
const path = require('path')
const body = require('body-parser')
const session = require('express-session')


module.exports = app => {
    app.use(body.urlencoded({extended:true}));
    app.use(session({
        secret: "cookie_secret",
        resave: true,
        saveUninitialized:true}));
    app.engine('html', require ('ejs').renderFile);
    app.set('view engine', 'html');
    app.use('/ParkVet_Manager', express.static("ParkVet_Manager"));
    app.set('ParkVet_Manager', path.join(__dirname, '/ParkVet_Manager'))

    var login = "001"
    var password = "12345"
    
    app.post('/manager', (req, res) => {
        if(req.body.senha == password && req.body.id == login){
            req.session.login = login
        }
        res.render("manager")
    })

    app.get('/',(req, res)=> {
        if(req.session.login){
            res.render('./1-Cadastro/cadastro')
        }else{
            res.render('manager')
        }
    })      
}
    

