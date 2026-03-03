# Ghar Ka Saathi (Full-Structure Starter)

This repository now contains **separate frontend and backend** with a scalable base for MVC + DDD-inspired modules.

## What is implemented

- Public home and services browsing **without forced login**.
- Auth module with register, login and OTP verification flow (phone/email based via Twilio/Nodemailer env credentials).
- Worker discovery API (city + skill + name filtering).
- Booking creation and booking history (protected routes).
- Careers section in footer with service partner opportunities.
- Green-theme UI, animations, and reusable styles.

## Architecture

### Backend (`backend/src`)
- `modules/*`: domain-oriented modules (auth, workers, bookings, public).
- `*.controller.js`: request orchestration.
- `*.service.js`: business logic.
- `*.routes.js`: route declarations.
- `common/middleware`: auth and error handling.

### Frontend (`frontend/src`)
- `pages/*`: routed views.
- `styles/global.css`: central styling tokens.
- `App.jsx`: shared layout + footer careers block.

## Run locally

```bash
cd backend && npm install && npm run dev
cd frontend && npm install && npm run dev
```

## Installed packages

Backend:
- express, cors, dotenv
- bcryptjs, jsonwebtoken
- zod
- nodemailer, twilio

Frontend:
- react, react-dom
- react-router-dom
- vite + @vitejs/plugin-react

## Learning + build flow (recommended)
1. Start with auth + role management.
2. Build city and category based search.
3. Add worker map integration + geocoding.
4. Add booking lifecycle + payment state.
5. Add socket chat + notifications.
6. Add admin/agent dashboards + logs.
7. Add production DB (MongoDB), caching, and file uploads.
8. Add advanced security hardening (rate-limit, audit logs, IP checks).

## Notes for next step
- Replace in-memory DB with MongoDB models.
- Add reset-password and forgot-password APIs.
- Add OTP fallback logic: if Twilio/Nodemailer not configured, keep OTP in logs for local testing.
- Add map UI (Leaflet/Google Maps) for nearby workers and route path.
