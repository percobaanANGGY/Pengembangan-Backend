const { DataTypes } = require('sequelize');
// Ensure this path is correct and that db.js exports a Sequelize instance
const sequelize = require('../config/db');

const Jurusan = sequelize.define('jurusan', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    kode: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique:true
    },
    nama_jurusan: {
        type: DataTypes.STRING,
        allowNull: false
    }
    }, {
        tableName: 'jurusan',
        timestamps: false
    
});

module.exports = Jurusan;