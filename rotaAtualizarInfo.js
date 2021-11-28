const express = require("express")
const router = express.Router();
const path = require('path'); 
const cadastramentoTutor = require("./models/cadastramentoTutor");


//é a mesma pagina de cadastro. Ver o que é melhor fazer 
router.get('/atualizar-tutor', (req, res)=> {
    res.render((__dirname, "./1aCadastrado/atualizar-tutor"))
})
router.patch('/atualizar-tutor', (req, res)=>{
    const id = parseInt(req.params.id)
    const valores = req.body

    cadastramentoTutor.altera(id, valores, res)
    
})


//router.get('/')

module.exports = router