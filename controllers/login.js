const express = require('express')
//const session = require('express-session')
const path = require('path')
const bp = require('body-parser')
const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.urlencoded({extended:true}))
    app.engine('html', require ('ejs').renderFile);
    app.set('view engine', 'html');
    app.use(express.static("ParkVet_Manager"));
    app.set('ParkVet_Manager', path.join(__dirname, '/ParkVet_Manager'))

    
    app.get('/', (req, res) => {
       res.render("index")
    })

    app.get('/manager.html', (req,res) => {
        
        //res.sendFile(__dirname + "/ParkVet_TCC/ParkVet_Manager/manager.html")
    })      
}
    

