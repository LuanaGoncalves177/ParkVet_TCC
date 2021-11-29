const express = require("express")
const router = express.Router();
const path = require('path') 

router.get('/venda', (req, res)=>{
    res.render((__dirname, "./Vendas/venda"))
})


//Comprar Cachorro
router.get('/venda/comprar', (req, res)=>{
    res.render((__dirname, "./Vendas/comprar"))
})

module.exports = router