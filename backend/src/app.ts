import express, { type Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';

import authRoutes from './routes/auth.route';
import videoRoutes from './routes/video.route';

const app: Express = express();

app.use(helmet());

app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// Configure CORS middleware
app.use(
  cors({
    origin: ['http://localhost:3000'], // Specify the allowed origin(s) for requests
    credentials: true, // Allow sending cookies along with the requests
  })
);

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/videos', videoRoutes);

export default app;
