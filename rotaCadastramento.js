const { info } = require("console");
const express = require("express")
const router = express.Router();
const path = require('path') 
const CadastramentoTutor = require('./models/cadastramentoTutor')


//Cadastrar Tutor
router.get('/cadastro-tutor', (req,res)=>{
    res.render((__dirname, "./Cadastro/cadastrar-tutor"))
})

router.post('/cadastro-tutor', (req,res)=>{
    const cadastroTutor = req.body
    CadastramentoTutor.adiciona(cadastroTutor, res)
})



//Cadastrar Pet
router.get('/cadastro-pet', (req, res)=>{
    res.render((__dirname, "./Cadastro/cadastrar-pets"))
})

router.get('/adicionar-pets-cliente', (req,res)=>{
    res.render((__dirname, "./Cadastro/adicionar-pets-cliente"))
})

router.get('/adicionar-pets', (req, res)=> {
    res.render((__dirname, "./Cadastro/adicionar-pets"))
})


module.exports = router