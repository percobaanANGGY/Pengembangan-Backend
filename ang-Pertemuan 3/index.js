const express = require ("express");
const app = express();
const port = 3000;
const user = require('users');
const mapel = require('./mapel');
const siswa = require('./siswa');
const guru = require('./guru');
const kelas = require('./kelas');
const jadwal = require('./jadwal');
const nilai = require('./nilai');
const presensi = require('./presensi');

//menggunakan modul
app.use("/users", users);
app.use("/mapel", mapel);
app.use("/siswa", siswa);
app.use("/guru", guru);
app.use("/kelas", kelas);
app.use("/jadwal", jadwal);
app.use("/nilai", nilai);
app.use("/presensi", presensi);

//routing
app.get("/", (req,res) => {
    res.end("Ambil data");
});

app.post("/", (req,res) => {
    res.end("Kirim data");
});

app.put("/", (req,res) => {
    res.end("Edit data");
});

app.patch("/", (req,res) => {
    res.end("Edit data");
});

app.delete("/", (req,res) => {
    res.end("Hapus data");
});

app.listen(port, () => {
    console.log('Aplikasi berjalan pada : ${port}');
});