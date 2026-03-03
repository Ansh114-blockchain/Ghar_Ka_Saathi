import { loginSchema, registerSchema } from './auth.schema.js';
import * as authService from './auth.service.js';

export const register = async (req, res, next) => {
  try {
    const payload = registerSchema.parse(req.body);
    const result = await authService.register(payload);
    return res.status(201).json(result);
  } catch (error) {
    return next(error);
  }
};

export const verifyOtp = (req, res, next) => {
  try {
    const result = authService.verifyOtp(req.body);
    return res.json(result);
  } catch (error) {
    return next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const payload = loginSchema.parse(req.body);
    const result = await authService.login(payload);
    return res.json(result);
  } catch (error) {
    return next(error);
  }
};
