const express = require('express'); 
const router = express.Router();
const Supplier = require('../models/supplier');

// GET semua supplier
router.get('/', async (req, res) => {
    try {
        const supplier = await Supplier.findAll();
        res.json(supplier);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// GET supplier by id
router.get('/:idSup', async (req, res) => {
    const { idSup } = req.params;
    try {
        const supplier = await Supplier.findByPk(idSup);
        if (supplier) {
            res.json(supplier);
        } else {
            res.status(404).json({ message: 'Supplier not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// POST tambah supplier
router.post('/', async (req, res) => {
    const { idSup, namaSupplier, Perusahaan, barang, kuota, hari } = req.body;
    try {
        const supplier = await Supplier.create({ idSup, namaSupplier, Perusahaan, barang, kuota, hari });
        res.status(201).json(supplier);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// PUT update supplier 
router.put('/:idSup', async (req, res) => {
    const { idSup } = req.params;
    const { namaSupplier, Perusahaan, barang, kuota, hari } = req.body;
    try {
        const [updated] = await Supplier.update(
            { namaSupplier, Perusahaan, barang, kuota, hari },
            { where: { idSup } } 
        );

        if (updated === 0) {
            return res.status(404).json({ message: 'Supplier tidak ditemukan' });
        }

        res.json({ message: 'Supplier berhasil diperbarui' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE supplier
router.delete('/:idSup', async (req, res) => { 
    const { idSup } = req.params;
    try {
        const deleted = await Supplier.destroy({ where: { idSup } }); 

        if (deleted === 0) {
            return res.status(404).json({ message: 'Supplier tidak ditemukan' });
        }

        res.json({ message: 'Supplier berhasil dihapus' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;