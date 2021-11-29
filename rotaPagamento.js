const { render } = require("ejs");
const express = require("express")
const moment = require('moment')
const router = express.Router();
const adicionaPagamento = require('./models/pagamentos')

//Pagamentos
router.get('/pagamentos/pagamento-cadastrado', (req, res)=>{
    res.render((__dirname, "./ServiçosEpacotes/pagamento-cadasrado"))
})
router.post('/pagamentos/pagamento-cadastrado', (req, res)=>{
    idTutor = req.body.idtutor + 0
    total = req.body.total + 0
    adicionaPagamento.create({
        idTutor: idTutor,
        servicoOuPacoteContratado:req.body.servicoCadastrado,
        valor: req.body.valor,
        total:total,
        formaDePagamento: req.body.formasPagamento,
        dataCriacao: moment()
    }).then(function(){
       res.redirect('../agendar')
    }).catch(function(erro){
        res.send("Erro:" + erro)
    })
})

router.get('/pagamentos/pagamento-pendente', (req, res)=>{
    res.render((__dirname, "./ServiçosEpacotes/pagamento-pendente"))
})

router.post('/pagamentos/pagamento-pendente', (req, res)=>{
    idTutor = req.body.idtutor + 0
    total = req.body.total + 0
    adicionaPagamento.create({
        idTutor: idTutor,
        servicoOuPacoteContratado:req.body.servicoCadastrado,
        valor: req.body.valor,
        total:total,
        formaDePagamento: req.body.formasPagamento,
        dataCriacao: moment()
    }).then(function(){
        res.redirect('../agendar')
    }).catch(function(erro){
        res.send("Erro:" + erro)
    })
})


module.exports = router