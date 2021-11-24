const express = require('express')

const app = express()

app.listen(4000,() => console.log("Deu Certo"))

app.get('/', (req, res) => res.send("Servidor Rodando"))