const db = require('../models/bd')

const adicionaPet = db.sequelize.define("pet", {
    idPet:{
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        //field: 'id'
    },
    nomePet:{
        type: db.Sequelize.STRING
    }, 
    raca:{
        type: db.Sequelize.STRING
    },
    especie:{
        type: db.Sequelize.STRING
    },
    pelo:{
        type: db.Sequelize.STRING
    },
    porte:{
        type: db.Sequelize.STRING
    },
    sexo:{
        type: db.Sequelize.STRING
    },
    dataCriacao: {
        type: db.Sequelize.DATE
    },
    idTutor:{
        type: db.Sequelize.INTEGER,
        referencese: 'tutor',
        referenceseKey: 'idTutor'
    }

}, {
    timestamps: false
})

module.exports = adicionaPet;