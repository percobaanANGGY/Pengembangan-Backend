const { Sequelize } = require('sequelize');
//require('dotenv').confiq();

const sequelize = new Sequelize('toko', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;