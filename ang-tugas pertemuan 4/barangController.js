const fs = require("fs");
const path = require("path");
const dataPath = path.join(__dirname, "data.json");

const readData = () => {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
};

exports.getAllBarang = (req, res) => {
  const barang = readData();
  res.json(barang);
};

exports.getBarangById = (req, res) => {
  const barang = readData();
  const found = barang.find((b) => b.id == req.params.id);
  if (!found) return res.status(404).json({ message: "Barang tidak ditemukan" });
  res.json(found);
};

exports.createBarang = (req, res) => {
  const barang = readData();
  const newId = barang.length ? Math.max(...barang.map(b => b.id)) + 1 : 1;
  const newBarang = { id: newId, ...req.body };
  barang.push(newBarang);
  writeData(barang);
  res.status(201).json({ message: "Barang ditambahkan", newBarang });
};

exports.updateBarang = (req, res) => {
  let barang = readData();
  const index = barang.findIndex((b) => b.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Barang tidak ditemukan" });
  barang[index] = { ...barang[index], ...req.body };
  writeData(barang);
  res.json({ message: "Barang diperbarui", barang: barang[index] });
};

exports.deleteBarang = (req, res) => {
  let barang = readData();
  const newBarang = barang.filter((b) => b.id != req.params.id);
  if (newBarang.length === barang.length)
    return res.status(404).json({ message: "Barang tidak ditemukan" });
  writeData(newBarang);
  res.json({ message: "Barang dihapus" });
};
