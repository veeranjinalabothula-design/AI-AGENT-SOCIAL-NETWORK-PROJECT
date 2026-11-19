# SocialHub AI

A full-stack social network built with React, Express, MongoDB, and Socket.IO. It includes account registration and login, posts, comments, connections, messaging, notifications, profile pages, and optional Cloudinary uploads and Razorpay payouts.

## Requirements

- Node.js 20.19+ or 22.12+
- npm
- MongoDB running locally or a MongoDB Atlas connection string
- A Cloudinary account for image uploads (optional until uploads are used)
- RazorpayX credentials for withdrawals (optional)

## Local setup

### 1. Configure the backend

```powershell
cd Backend
Copy-Item .env.example .env
npm install
npm run dev
```

Edit `Backend/.env` and set `MONGO_URI` to your MongoDB connection string and `SECRET_KEY` to a private, random value. Set the Cloudinary variables to enable media uploads. RazorpayX variables are only needed for withdrawals. The API listens on `http://localhost:8000` by default.

### 2. Configure and run the frontend

Open a second terminal at the project root:

```powershell
cd Frontend
Copy-Item .env.example .env
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`). The frontend sends `/api` requests through Vite to the backend and connects to the same backend for Socket.IO.

## Build and lint

From `Frontend`:

```powershell
npm run build
npm run lint
```

## Environment variables

`Backend/.env.example` and `Frontend/.env.example` list the local configuration. Never commit `.env` files or real credentials. `VITE_BACKEND_URL` defaults to `http://localhost:8000`; set it to your backend origin when using a non-default host or port.
