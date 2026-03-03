import { Router } from 'express';
import * as controller from './workers.controller.js';

export const workersRouter = Router();

workersRouter.get('/', controller.listWorkers);
