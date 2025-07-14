import { db } from './db.js';

export const createUser = (username, password, callback) => {
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], callback);
};

export const findUserByUsername = (username, callback) => {
  db.query('SELECT * FROM users WHERE username = ?', [username], callback);
};