const Sequelize = require("Sequelize")

const sequelize = new Sequelize('parkvet', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}