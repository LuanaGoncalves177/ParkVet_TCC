const express = require("express")
const router = express.Router();
const path = require('path'); 
const adicionaServicoContratado = require("./models/ServicoEpacotes");
const moment = require('moment')

//Pagina inicial Serviços e pacotes
router.get('/servicosEpacotes', (req,res)=>{
    res.render((__dirname, "./ServiçosEpacotes/servicosEpacotes"))
})

//Serviços
router.get('/servicosEpacotes/servicos', (req, res)=> {
    res.render((__dirname, "./ServiçosEpacotes/servicos"))
})

router.post('/servicosEpacotes/servicos', (req, res)=> {
    var dataS = req.body.data
    var horaS = req.body.horario
    var dataShoraS = (dataS +" " + horaS)
    var dataServicoNew = moment(dataS + " " + horaS)
    console.log(dataShoraS)
    console.log(dataServicoNew)
    

    adicionaServicoContratado.create({
        servicoContratado: req.body.servico,
        dataServico:dataServicoNew,
        total:req.body.total,
        idPet: req.body.idPet, 
        dataCriacao: moment().format('YYYY-MM-DD')
    }).then(function(){
        console.log('Entrou')
        res.redirect('../agendar')
    }).catch(function(erro){
        res.send("Erro:" + erro)
    })
})

//Pacotes
router.get('/servicosEpacotes/pacotes', (req, res)=>{
    res.render((__dirname, "./ServiçosEpacotes/pacotes"))
})

router.get('/servicosEpacotes/pacotes-contratar', (req, res)=>{
    res.render(((__dirname, "./ServiçosEpacotes/pacotes-dois-em-um")))
})

router.get('/servicosEpacotes/pacotes-visualizacao', (req, res)=>{
    res.render(((__dirname, "./ServiçosEpacotes/pacote-visualizacao")))
})

//Pagamentos
router.get('/pagamentos/pagamento-cadastrado', (req, res)=>{
    res.render((__dirname, "./ServiçosEpacotes/pagamento-cadasrado"))
})

router.get('/pagamentos/pagamento-pendente', (req, res)=>{
    res.render((__dirname, "./ServiçosEpacotes/pagamento-pendente"))
})


module.exports = router