import { Router } from 'express';
import * as controller from './bookings.controller.js';
import { requireAuth } from '../../common/middleware/auth.js';

export const bookingsRouter = Router();

bookingsRouter.use(requireAuth);
bookingsRouter.post('/', controller.createBooking);
bookingsRouter.get('/mine', controller.listMyBookings);
