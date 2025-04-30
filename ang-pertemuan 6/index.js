const express = require("express");
const app = express();
const port = 3000;
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");

app.use(express.json());
app.use('/api/mahasiswa', mahasiswaRoutes);

app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
}); 

