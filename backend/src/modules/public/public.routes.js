import { Router } from 'express';

export const publicRouter = Router();

publicRouter.get('/home-content', (req, res) => {
  res.json({
    hero: 'Trusted Home Services in your city',
    highlights: [
      'Browse features before login',
      'City-first search and nearby map workers',
      'Verified workers with OTP onboarding'
    ],
    careers: {
      heading: 'Be our service partner',
      options: ['Cleaner', 'Driver', 'Electrician', 'Home Tutor']
    }
  });
});
