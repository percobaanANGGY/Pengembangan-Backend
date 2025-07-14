export const authMiddleware = (req, res, next) => {
  const isAuthorized = req.headers['x-api-key'] === 'admin123'; // Contoh token manual

  if (!isAuthorized) {
    return res.status(401).json({ message: 'Akses ditolak' });
  }

  next();
};