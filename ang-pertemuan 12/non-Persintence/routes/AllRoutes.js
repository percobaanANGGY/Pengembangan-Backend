const express = require('express');
const jurusanController = require('../controllers/jurusan');
const mahasiswaController = require('../controllers/mahasiswa');
// const { cache } = require('react');
const apicache = require('apicache');
const cache = apicache.middleware;

const router = express.Router();

// Routing untuk jurusan
router.get('/jurusan', cache('1 hour'), jurusanController.getAlljurusan);
router.post('/jurusan', jurusanController.createJurusan);
router.put('/jurusan/:id', jurusanController.updateJurusan);
router.delete('/jurusan/:id', jurusanController.deleteJurusan);
// Routing untuk mahasiswa
router.get('/maasiswa', mahasiswaController.getAllMahasiswa);
router.get('/maasiswa/:id', mahasiswaController.getMahasiswaById);
router.post('/maasiswa', mahasiswaController.createMahasiswa);
router.put('/maasiswa/:id', mahasiswaController.updateMahasiswa);
router.delete('/maasiswa/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;