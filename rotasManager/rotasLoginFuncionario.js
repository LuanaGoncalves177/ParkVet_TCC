const express = require("express")
const router = express.Router();
const session = require('express-session')
const path = require('path')

var login = "001"
var password = "12345"

//fazer o redirecionamento para /manager ou /administrador 

router.get('/manager', (req, res)=> {
    try {
        res.render((__dirname, "./manager"))
        
    } catch (error) {
        res.send(error)
        
    }
})

router.post('/manager', (req, res) => {
    if(req.body.senha == password && req.body.id == login){
        //req.session.login = login
        res.redirect('manager/cadastro')
    }else{
        res.render((__dirname, "./manager"))
    }
})


module.exports = router;