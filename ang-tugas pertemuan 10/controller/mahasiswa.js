const express = require('express');
const router = express.Router();
const Siswa = require('../models/mahasiswa');

// GET semua siswa
router.get('/', async (req, res) => {
    const siswa = await Siswa.findAll();
    res.json(siswa);
});

// GET siswa by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const siswa = await Siswa.findByPk(id);
    if (siswa) {
        res.json(siswa);
    } else {
        res.status(404).json({ message: 'Siswa not found' });
    }
});

// POST tambah siswa
router.post('/', async (req, res) => {
    const { nama, nisn, alamat } = req.body;
    try {
        const newSiswa = await Siswa.create({ nama, nisn, alamat });
        res.status(201).json(newSiswa);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// PUT update siswa
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { nama, nisn, alamat } = req.body;
    try {
        const update = await Siswa.update(
            { nama, nisn, alamat },
            { where: { id } }
        );
        res.json({ message: 'Siswa updated', update });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// DELETE siswa
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Siswa.destroy({ where: { id } });
        res.json({ message: 'Siswa deleted' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;