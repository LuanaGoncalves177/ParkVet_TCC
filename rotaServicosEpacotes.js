const express = require("express")
const router = express.Router();
const path = require('path') 

//Pagina inicial Serviços e pacotes
router.get('/servicosEpacotes', (req,res)=>{
    res.render((__dirname, "./ServiçosEpacotes/servicosEpacotes"))
})

//Serviços
router.get('/servicosEpacotes/servicos', (req, res)=> {
    res.render((__dirname, "./ServiçosEpacotes/servicos"))
})

router.post('/servicosEpacotes/servicos', (req, res)=> {

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