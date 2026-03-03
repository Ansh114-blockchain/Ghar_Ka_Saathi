import * as bookingService from './bookings.service.js';

export const createBooking = (req, res, next) => {
  try {
    const booking = bookingService.createBooking({ ...req.body, customerId: req.user.id });
    return res.status(201).json(booking);
  } catch (error) {
    return next(error);
  }
};

export const listMyBookings = (req, res) => {
  const bookings = bookingService.listBookingsByUser({ userId: req.user.id, role: req.user.role });
  return res.json(bookings);
};
