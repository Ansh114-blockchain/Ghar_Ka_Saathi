import { Router } from 'express';
import * as controller from './auth.controller.js';

export const authRouter = Router();

authRouter.post('/register', controller.register);
authRouter.post('/verify-otp', controller.verifyOtp);
authRouter.post('/login', controller.login);
