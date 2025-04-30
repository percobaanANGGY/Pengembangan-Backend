const express = require('express');
const router = express.Router();
const supplierController = require('../controller/supplier');

router.get('/', supplierController.get);
router.get('/:idSup', supplierController.get);
router.post('/', supplierController.post);
router.put('/idSup', supplierController.put);
router.delete('/:idSup', supplierController.delete);

module.exports = router;