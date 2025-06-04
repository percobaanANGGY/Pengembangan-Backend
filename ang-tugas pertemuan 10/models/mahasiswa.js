const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Siswa = sequelize.define('Siswa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    nisn: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    alamat: {
        type: DataTypes.STRING(100),
        allowNull: false
    }
}, {
    tableName: 'siswa',
    timestamps: false
});

module.exports = Siswa;