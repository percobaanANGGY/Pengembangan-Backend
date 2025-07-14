import { db } from './db.js';

export const getAllProduk = (callback) => {
  db.query('SELECT * FROM produk', callback);
};

export const createProduk = (data, callback) => {
  db.query('INSERT INTO produk SET ?', data, callback);
};

export const updateProduk = (id, data, callback) => {
  db.query('UPDATE produk SET ? WHERE id = ?', [data, id], callback);
};

export const deleteProduk = (id, callback) => {
  db.query('DELETE FROM produk WHERE id = ?', [id], callback);
};
