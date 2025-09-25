import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import transcriptionRoutes from './routes/transcriptionRoutes';

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/transcription', transcriptionRoutes);
app.use('/', transcriptionRoutes);


const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/transcriptions_db';

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });
