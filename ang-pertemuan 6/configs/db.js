const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: '',
    database: 'akademik'
});

db.connect((err) => {
    if (err) throw err;
    console.log('koneksi ke database berhasil!') 
});
