const db = require('../models/bd')

    const adicionatutor = db.sequelize.define("tutor", {
        idTutor:{
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            //field: 'id'
        },
        nomeTutor:{
            type: db.Sequelize.STRING
        }, 
        endereco:{
            type: db.Sequelize.STRING
        },
        email: {
            type: db.Sequelize.STRING
        },
        whatsapp: {
            type: db.Sequelize.BIGINT(50)
        },
        telefoneFixo:{
            type: db.Sequelize.BIGINT(50)
        },
        autorizacao: {
            type: db.Sequelize.STRING
        },
        dataCriacao: {
            type: db.Sequelize.DATE
        }

    }, {
        timestamps: false
    })

 module.exports = adicionatutor;

    

