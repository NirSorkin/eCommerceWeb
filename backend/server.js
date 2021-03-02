import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import conncetDB from './config/db.js';
import connectDB from './config/db.js';

import productRoute from './routes/productRoute.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is runing.....');
});

app.use('/api/products', productRoute);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server runing in ${process.env.NODE_ENV}on port ${PORT}`.yellow.bold
  )
);
