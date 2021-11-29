const db = require('../models/bd')

    const adicionaCompra = db.sequelize.define("compras", {
        idCompra:{
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            //field: 'id'
        },
        nomeCliente:{
            type: db.Sequelize.STRING
        },
        especiePet:{
            type: db.Sequelize.STRING
        },
        produto:{
            type: db.Sequelize.STRING
        },
        quantidade:{
            type: db.Sequelize.INTEGER

        },
        preco:{
            type: db.Sequelize.STRING
        }, 
        total: {
            type: db.Sequelize.DECIMAL(15,2)
        },
        formasPagamento:{
            type: db.Sequelize.STRING
        },
        dataCriacao:{
            type: db.Sequelize.DATE
        }


    }, {
        timestamps: false
    })
 module.exports = adicionaCompra;

