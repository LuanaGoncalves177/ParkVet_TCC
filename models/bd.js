const Sequelize = require("Sequelize")

const sequelize = new Sequelize('parkvet', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}