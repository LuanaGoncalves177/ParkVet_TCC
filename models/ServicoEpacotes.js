const db = require('../models/bd')

    const adicionaServicoContratado = db.sequelize.define("servicocontratado", {
        idServicoContratado:{
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            //field: 'id'
        },
        servicoContratado:{
            type: db.Sequelize.JSON
        },
        dataServico:{
            type: db.Sequelize.DATE
        },
        total:{
            type: db.Sequelize.DECIMAL(15,2)
        },
        idPet:{
            type: db.Sequelize.INTEGER,
            referencese: 'pets',
            referenceseKey: 'idPet'
        }, 
        dataCriacao: {
            type: db.Sequelize.DATE
        }


    }, {
        timestamps: false
    })
 module.exports = adicionaServicoContratado;

