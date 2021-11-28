const express = require("express")
const router = express.Router();
const session = require('express-session')
const path = require('path')

var login = "001"
var password = "12345"



//fazer o redirecionamento para /manager ou /administrador 

router.get('/login', (req, res)=> {
    res.render('manager')
})

router.post('/login', (req, res) => {
    if(req.body.senha == password && req.body.id == login){
        req.session.login = login
        res.render((__dirname, "./Cadastro/cadastro"))
        
    }else{
        res.render("manager")
    }
})


module.exports = router;