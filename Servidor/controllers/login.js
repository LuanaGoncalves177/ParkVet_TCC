module.exports = app => {
    app.use(express.static(__dirname + "/ParkVet_Manager"));
    app.get('/', (req, res) => res.sendFile(__dirname + "/ParkVet_Manager/index.html"))

}
