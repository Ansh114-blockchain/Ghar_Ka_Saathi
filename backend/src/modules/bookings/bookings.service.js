import { randomUUID } from 'crypto';
import { db } from '../../common/utils/inMemoryDb.js';

export const createBooking = ({ customerId, workerId, dateTime, description, amount }) => {
  const booking = {
    id: randomUUID(),
    customerId,
    workerId,
    dateTime,
    description,
    amount,
    status: 'pending',
    paymentStatus: 'unpaid'
  };
  db.bookings.push(booking);
  return booking;
};

export const listBookingsByUser = ({ userId, role }) =>
  db.bookings.filter((b) => (role === 'worker' ? b.workerId === userId : b.customerId === userId));
