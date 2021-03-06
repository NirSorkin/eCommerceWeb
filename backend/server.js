import express from 'express';
import dotenv from 'dotenv';
import colors from 'colors';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import productRoute from './routes/productRoute.js';
import userRoute from './routes/userRoute.js';

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is runing.....');
});

app.use('/api/products', productRoute);
app.use('/api/users', userRoute);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server runing in ${process.env.NODE_ENV}on port ${PORT}`.yellow.bold
  )
);
