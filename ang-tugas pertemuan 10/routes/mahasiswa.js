const express = require('express');
const router = express.Router();
const siswaController = require('../controller/mahasiswa');

router.get('/', siswaController.get);
router.get('/:id', siswaController.get);
router.post('/', siswaController.post);
router.put('/:id', siswaController.put);
router.delete('/:id', siswaController.delete);

module.exports = router;