module.exports = app => {
    app.use(express.static(__dirname + "/ParkVet_Manager"));
    app.get('/', (req, res) => res.sendFile("D:/GitHub/ParkVet_TCC/ParkVet_Manager"))
    //app.get('/', (req, res) => res.send("Deu certo"))
}
