const express = require('express')

const app = express()

app.listen(4000,() => console.log("Deu Certo"))
app.use(express.static(__dirname + "/ParkVet_Manager"));

app.get('/', (req, res) => res.sendFile(__dirname + "/ParkVet_Manager/index.html"))
    

