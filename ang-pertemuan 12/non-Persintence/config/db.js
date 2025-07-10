const { Sequelize } = require('sequelize')

const sequlize = new Sequelize('akademik', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequlize;