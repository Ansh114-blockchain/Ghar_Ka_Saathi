import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import nodemailer from 'nodemailer';
import twilio from 'twilio';
import { env } from '../../config/env.js';
import { randomUUID } from 'crypto';
import { db } from '../../common/utils/inMemoryDb.js';

const twilioClient = env.twilioSid && env.twilioToken ? twilio(env.twilioSid, env.twilioToken) : null;

const transporter = env.smtpHost
  ? nodemailer.createTransport({
      host: env.smtpHost,
      port: env.smtpPort,
      auth: { user: env.smtpUser, pass: env.smtpPass }
    })
  : null;

export const register = async (payload) => {
  const exists = db.users.find((u) => u.email === payload.email);
  if (exists) throw new Error('Email already registered');

  const user = {
    id: randomUUID(),
    name: payload.name,
    email: payload.email,
    phone: payload.phone,
    role: payload.role,
    city: payload.city || env.defaultCity,
    passwordHash: await bcrypt.hash(payload.password, 10),
    verified: false
  };

  db.users.push(user);

  const otp = String(Math.floor(100000 + Math.random() * 900000));
  db.otps.push({ userId: user.id, code: otp, expiresAt: Date.now() + 5 * 60 * 1000 });

  if (payload.verificationMethod === 'phone' && twilioClient) {
    await twilioClient.messages.create({ body: `Your Ghar Ka Saathi OTP is ${otp}`, from: env.twilioPhone, to: user.phone });
  }

  if (payload.verificationMethod === 'email' && transporter) {
    await transporter.sendMail({
      from: env.smtpUser,
      to: user.email,
      subject: 'Ghar Ka Saathi OTP',
      text: `Your OTP is ${otp}`
    });
  }

  return { id: user.id, email: user.email, role: user.role, city: user.city };
};

export const verifyOtp = ({ email, code }) => {
  const user = db.users.find((u) => u.email === email);
  if (!user) throw new Error('User not found');

  const otp = db.otps.find((o) => o.userId === user.id && o.code === code && o.expiresAt > Date.now());
  if (!otp) throw new Error('Invalid or expired OTP');

  user.verified = true;
  db.otps = db.otps.filter((o) => o.userId !== user.id);
  return { verified: true };
};

export const login = async ({ email, password }) => {
  const user = db.users.find((u) => u.email === email);
  if (!user) throw new Error('Invalid credentials');

  const ok = await bcrypt.compare(password, user.passwordHash);
  if (!ok) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user.id, role: user.role, city: user.city }, env.jwtSecret, { expiresIn: '7d' });
  return { token, profile: { id: user.id, name: user.name, role: user.role, city: user.city } };
};
