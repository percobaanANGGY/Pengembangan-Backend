const express = require ("express");
const router = express.Router();

//routing
router.get("/", (req,res) => {
    res.send('Ini halaman get user');
});

router.post("/inputusers", (req,res) => {
    res.send('Ini halaman input users');
});

router.put("/editusers", (req,res) => {
    res.send('Ini halaman edit users');
});

router.delete("/hapususers", (req,res) => {
    res.send('Ini halaman delete users');
});

module.exports = router;