import express from 'express';
import cors from 'cors';
import { authRouter } from './modules/auth/auth.routes.js';
import { workersRouter } from './modules/workers/workers.routes.js';
import { bookingsRouter } from './modules/bookings/bookings.routes.js';
import { publicRouter } from './modules/public/public.routes.js';
import { errorHandler } from './common/middleware/errorHandler.js';
import { seedWorkers } from './modules/workers/workers.service.js';

export const createApp = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  seedWorkers();

  app.get('/health', (req, res) => res.json({ status: 'ok' }));
  app.use('/api/public', publicRouter);
  app.use('/api/auth', authRouter);
  app.use('/api/workers', workersRouter);
  app.use('/api/bookings', bookingsRouter);
  app.use(errorHandler);

  return app;
};
