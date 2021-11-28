const express = require("express")
const router = express.Router();
const path = require('path') 

var cadastro_tutor = path.join(__dirname, "/1-Cadastro/cadastrar-tutor")
router.get('/cadastro-tutor', (req,res)=>{
    res.render(cadastro_tutor)
})


module.exports = router