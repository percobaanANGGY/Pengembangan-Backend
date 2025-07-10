const express = require('express');
const { sequelize } = require('../non-Persintence/config/db');
const routes = require('./routes/AllRoutes')// Pastikan path sesuai struktur project Anda

const { app, PORT } = newFunction();

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function newFunction() {
    const app = express();
    app.use(express.json());
    app.use('/api', routes); // Prefix route untuk semua endpoint
    const PORT = process.env.PORT || 3000;
    return { app, PORT };
}
