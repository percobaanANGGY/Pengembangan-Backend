// routes/productRoutes.js
import express from 'express'
import {
  getProduk,
  createProduk,
  updateProduk,
  deleteProduk
} from '../controllers/produkController.js'

const router = express.Router()

router.get('/', getProduk)
router.post('/', createProduk)
router.put('/:id', updateProduk)
router.delete('/:id', deleteProduk)

export default router