import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import './models/db.js'; 
import produkRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/produk', produkRoutes);
app.use('/api/auth', authRoutes); // ← tambahkan ini

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
