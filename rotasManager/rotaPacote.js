const express = require("express")
const router = express.Router();
const moment = require('moment')

router.get('/servicosEpacotes/pacotes', (req, res)=>{
    res.render((__dirname, "./ServiçosEpacotes/pacotes"))
})

router.get('/servicosEpacotes/compartilhado', (req, res)=>{
    res.render((__dirname, "./ServiçosEpacotes/pacote-compartilhado"))
})

router.get('/servicosEpacotes/individual', (req, res)=>{
    res.render((__dirname, "./ServiçosEpacotes/pacote-individual"))
})
module.exports= router