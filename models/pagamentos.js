const db = require('../models/bd')

    const adicionaPagamento = db.sequelize.define("pagamentos", {
        idPagamento:{
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            //field: 'id'
        },
        idTutor:{
            type: db.Sequelize.INTEGER,
            referencese: 'tutors',
            referenceseKey: 'idTutor'
        },
        servicoOuPacoteContratado:{
            type: db.Sequelize.STRING
        },
        valor:{
            type: db.Sequelize.DECIMAL(15,2)
        },
        total:{
            type: db.Sequelize.DECIMAL(15,2)
        },
        formaDePagamento:{
            type: db.Sequelize.STRING
        }, 
        dataCriacao: {
            type: db.Sequelize.DATE
        }


    }, {
        timestamps: false
    })
 module.exports = adicionaPagamento;

