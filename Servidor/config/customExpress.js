const express = require('express')
const consign = require('consign')
 
module.exports = () => {
    const app = express()

    app.use(express.json())
    app.use(express.urlencoded({ extended: true}))
 
    consign()
        .include('./ParkVet_Manager/Servidor/controllers')
        .into(app)
 
 return app
}