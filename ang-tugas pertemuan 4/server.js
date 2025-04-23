const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const barangRoutes = require("./barangRoutes");

const app = express();
const port = 6969;

app.use(cors());
app.use(bodyParser.json());
app.use("/barang", barangRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});