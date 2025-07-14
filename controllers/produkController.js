// controllers/produkController.js
import { db } from '../config/db.js'

// Ambil semua produk
export const getProduk = (req, res) => {
  db.query('SELECT * FROM produk', (err, results) => {
    if (err) return res.status(500).json({ message: 'Gagal ambil produk', error: err })
    res.json(results)
  })
}

// Tambah produk baru
export const createProduk = (req, res) => {
  const { produk, harga } = req.body
  if (!produk || !harga) {
    return res.status(400).json({ message: 'Produk dan harga wajib diisi' })
  }

  db.query('INSERT INTO produk (produk, harga) VALUES (?, ?)', [produk, harga], (err, result) => {
    if (err) return res.status(500).json({ message: 'Gagal tambah produk', error: err })
    res.status(201).json({ message: 'Produk berhasil ditambahkan' })
  })
}

// Update produk
export const updateProduk = (req, res) => {
  const { id } = req.params
  const { produk, harga } = req.body

  db.query('UPDATE produk SET produk = ?, harga = ? WHERE id = ?', [produk, harga, id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Gagal update produk', error: err })
    res.json({ message: 'Produk berhasil diupdate' })
  })
}

// Hapus produk
export const deleteProduk = (req, res) => {
  const { id } = req.params

  db.query('DELETE FROM produk WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).json({ message: 'Gagal hapus produk', error: err })
    res.json({ message: 'Produk berhasil dihapus' })
  })
}
