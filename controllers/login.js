const express = require('express')

module.exports = app => {
    app.use(express.static("ParkVet_Manager"));
    
    app.get('/', (req, res) => res.sendFile(__dirname + "/ParkVet_Manager/index.html"))

    app.get('/manager.html', (req,res) => {
        //res.sendFile(__dirname + "/ParkVet_TCC/ParkVet_Manager/manager.html")
        console.log("Manager")
})
    
}
