const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Supplier = sequelize.define('supplier', {
    idSup: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    namaSupplier: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    Perusahaan: {
        type: DataTypes.STRING,
        allowNull: false
    },
    barang: {
        type: DataTypes.STRING,
        allowNull: false
    },
    kuota: {
        type: DataTypes.INTEGER,
        allowNull: false

    },
    hari: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'supplier',
    timestamps: false
});

module.exports = Supplier;