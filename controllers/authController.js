import jwt from 'jsonwebtoken';
import { createUser, findUserByUsername } from '../models/userModel.js';

export const register = (req, res) => {
  const { username, password } = req.body;
  createUser(username, password, (err, result) => {
    if (err) return res.status(500).json({ message: 'Gagal mendaftar', error: err });
    res.status(201).json({ message: 'Registrasi berhasil' });
  });
};


export const login = (req, res) => {
  const { username, password } = req.body;
  findUserByUsername(username, (err, results) => {
    if (err) return res.status(500).json({ message: 'Login gagal', error: err });
    if (results.length === 0 || results[0].password !== password) {
      return res.status(401).json({ message: 'Username atau password salah' });
    }

    const token = jwt.sign({ id: results[0].id, username }, process.env.JWT_SECRET);
    res.json({ message: 'Login berhasil', token });
  });
};
