const express = require("express")
const router = express.Router();


router.get('/cadastro-tutor', (req,res)=>{
    res.render('/1-Cadastro/cadastrar-tutor')
})


module.exports = router