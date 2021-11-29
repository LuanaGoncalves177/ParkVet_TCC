const express = require("express")
const router = express.Router();
const path = require('path') 

router.get('/venda', (req, res)=>{
    res.send("vendas...")
})

module.exports = router