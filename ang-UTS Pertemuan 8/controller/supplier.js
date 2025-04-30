const express = require('express');
const router = express.Router();
const Supplier = require('../models/supplier');

router.get('/', async (req, res) => {
    const supplier = await Supplier.findAll();
    res.json(supplier);
});

// GET supplier by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const supplier = await Supplier.findByPk(id);
    if (supplier) {
        res.json(supplier);
    } else {
        res.status(404).json({ message: 'Supplier not found' });
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
    const { id } = req.params;
    const { idSup, namaSupplier, Perusahaan, barang, kuota, har } = req.body;
    try {
        const update = await Supplier.update(
            { idSup, namaSupplier, Perusahaan, barang, kuota, har },
            { where: { id } }
        );
        res.json({ message: 'Supplier updated', update });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE supplier
router.delete('/:idSup', async (req, res) => {
    const { id } = req.params;
    try {
        await Supplier.destroy({ where: { id } });
        res.json({ message: 'Supplier deleted'});
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;