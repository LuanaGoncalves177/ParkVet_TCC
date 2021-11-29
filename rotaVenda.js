const express = require("express")
const router = express.Router();
const moment = require('moment')

const adicionaCompra = require('./models/comprar')

//Venda
router.get('/venda', (req, res)=>{
    res.render((__dirname, "./Vendas/venda"))
})

//Compra
router.get('/venda/comprar', (req, res)=>{
    res.render((__dirname, "./Vendas/comprar"))
})

router.post('/venda/comprar', (req,res)=>{
    
    adicionaCompra.create({
        nomeCliente: req.body.nomeTutor,
        especiePet:req.body.especie,
        produto:req.body.total,
        quantidade: req.body.quantidade, 
        preco: req.body.preco,
        total: req.body.total,
        formasPagamento: req.body.formasPagamento,
        dataCriacao: moment()
    }).then(function(){
        res.redirect('../cadastro')
    }).catch(function(erro){
        res.send("Erro:" + erro)
    })
})
module.exports = router