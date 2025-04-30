const db = require('../configs/db');

//Ambil semua mahasiswa
exports.getMahasiswa = (req,res) => {
    db.query('SELECT * FROM mahasiswa',(err,result) => {
        if(err) throw err;
        res.json(result);
    });
};

//Ambil satu mahasiswa
exports.getMahasiswaById = (req,res) => {
    db.query('SELECT * FROM mahasiswa WHERE id = ?',[req.params.id],(err,result) => {
        if(err) throw err;
        res.json(result);
    });
};

//tambah mahasiswa
exports.addMahasiswa = (req,res) => {
    db.query('INSERT INTO mahasiswa SET ?',req.body,(err,result) => {
        if(err) throw err;
        res.json(result);
    });
}; 

//Update data mahasiswa
exports.updateMahasiswa = (req,res) => {
    const { nama, nim, jurusan } = req.body;
    const id =req.params.id;
    db.query(
        'UPDATE mahasiswa SET nama = ?, nim = ?, jurusan = ? WHERE id = ?',
    [nama,nim,jurusan,id],
    (err) => {
        if(err) throw err;
        res.json({id, nama, nim, jurusan});
    });
}

//Hapus data mahasiswa
exports.deleteMahasiswa = (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM mahasiswa WHERE id = ?', [id], (err, results) => {
        if(err) throw err;
        res.json({message: 'Mahasiswa deleted successfully'});
    });
}