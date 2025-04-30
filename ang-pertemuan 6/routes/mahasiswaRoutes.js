const express = ('express');
const router = express.router();
const mahasiswaController = require('.../controller/mahasiswaControllers');

router.get('/', mahasiswaController.getMahasiswa);
router.get('/:id', mahasiswaController.getMahasiswaById);
router.post('/', mahasiswaController.createMahasiswa);
router.put('/:id', mahasiswaController.updateMahasiswa);
router.delete('/:id', mahasiswaController.deleteMahasiswa);

module.exports = router;