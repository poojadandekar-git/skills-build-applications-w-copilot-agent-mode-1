import express from 'express';
import mongoose from 'mongoose';

const app = express();
const PORT = 8000;
const MONGO_URI = 'mongodb://localhost:27017/octofit-tracker';

app.use(express.json());

app.get('/api/status', (_req, res) => {
  res.json({ status: 'ok', port: PORT, db: 'mongodb://localhost:27017' });
});

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB at', MONGO_URI);
    app.listen(PORT, () => {
      console.log(`Backend server listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('MongoDB connection failed:', error);
    process.exit(1);
  });
