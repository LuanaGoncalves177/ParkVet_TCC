const express = require("express")
const moment = require('moment')
const router = express.Router();
//const CadastramentoTutor = require('./models/cadastramentoTutor')
const body = require("body-parser")
const tutor = require('../models/cadastramentoTutor'); 
const adicionaPet = require("../models/cadastramentoPet");
const Seleciona = require('../models/selecionaTutor')

router.use(body.urlencoded({extended:true}));
router.use(body.json())


//Cadastro
router.get('/', (req,res)=>{
    res.render((__dirname, "./Cadastro/cadastro"))

})

router.get('/cadastro/:nomeTutor', Seleciona.selecionaTutor)

//Cadastrar Tutor
router.get('/cadastro-tutor', (req,res)=>{
    res.render((__dirname, "./Cadastro/cadastrar-tutor"))
})

router.post('/cadastro-tutor', (req,res)=>{
    tutor.create({
        nomeTutor: req.body.nomeTutor, 
        endereco:req.body.enderecoTutor,
        email: req.body.emailTutor,
        whatsapp: req.body.whatsappTutor,
        telefoneFixo:req.body.telefoneTutor,
        autorizacao: req.body.autorizacaoTutor,
        dataCriacao: moment().format('YYYY-MM-DD') 
    }).then(function(){
        res.redirect('./cadastro-pet')
    }).catch(function(erro){
        res.send("Erro:" + erro)
    })
})

//Cadastrar Pet
router.get('/cadastro-pet', (req, res)=>{
    res.render((__dirname, "./Cadastro/cadastrar-pets"))
})
router.post('/cadastro-pet', (req, res)=>{
    adicionaPet.create({
        nomePet: req.body.petNome,
        raca: req.body.raca,
        especie:req.body.especie,
        pelo:req.body.pelo,
        porte:req.body.porte,
        sexo:req.body.sexo,
        dataCriacao: moment().format('YYYY-MM-DD'),
        idTutor: req.body.idTutor
    }).then(function(){
        res.redirect('../servicosEpacotes')
    }).catch(function(erro){
        res.send("Erro:" + erro)
    })
})

router.get('/adicionar-pets-cliente', (req,res)=>{
    res.render((__dirname, "./Cadastro/adicionar-pets-cliente"))
})

router.get('/adicionar-novo-pets', (req, res)=> {
    res.render((__dirname, "./Cadastro/adicionar-pets"))
})

router.post('/adicionar-novo-pets', (req,res)=>{
    adicionaPet.create({
        nomePet: req.body.petNome,
        raca: req.body.raca,
        especie:req.body.especie,
        pelo:req.body.pelo,
        porte:req.body.porte,
        sexo:req.body.sexo,
        dataCriacao: moment().format('YYYY-MM-DD'),
        idTutor: parseInt(req.body.idTutor)
    }).then(function(){
        res.redirect('../cadastro-pet')
    }).catch(function(erro){
        res.send("Erro:" + erro)
    })
})


module.exports = router