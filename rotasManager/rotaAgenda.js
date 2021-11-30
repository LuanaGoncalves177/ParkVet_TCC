const express = require("express")
const router = express.Router();
const path = require('path') 

//Agenda
router.get('/agendar', (req,res)=>{
    res.render((__dirname, "./Agendamentos/agendamentos"))
})

router.get('/agenda', (req,res)=>{
    res.render((__dirname, "./Agendamentos/agendamento-agendados"))
})

module.exports = router