# Express + React Auth Boilerplate (for playtime apps)

## Folder Overview
```
express-react-secured-boilerplate/
├── backend/
│   ├── controllers/        # Auth logic abstraction
│   ├── middleware/         # JWT middleware, guards
│   ├── models/             # MongoDB (Mongoose models)
│   ├── services/           # Separate memory-db logics
│   ├── routes/
│   │   ├── auth.js         # auth routes
│   ├── index.js            # Unified entry (Mongo or in-memory)
│   └── ...
└── frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── services/        # Axios and API helpers
```

---

## Setup

### 1. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
```

---

### 2. Create a `.env` in `/backend`

```env
PORT=5050
JWT_SECRET=your_secret_key
USE_MONGO=false
MONGO_URI=mongodb://localhost:27017/secure-auth
NODE_ENV=development
```

Set `USE_MONGO=true` to enable MongoDB.

---

### 3. Run the servers

#### Option A: In-memory mode

```bash
# Uses array-based user storage
cd backend
node index.js
```

#### Option B: MongoDB mode

```bash
# Requires Mongo running locally or remotely
USE_MONGO=true node index.js
```

> You can also set `USE_MONGO=true` in your `.env`.

---

### 4. Run the frontend

```bash
cd frontend
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## API Routes Overview

### `/api/auth` (Authentication)

| Method | Route     | Description              |
| ------ | --------- | ------------------------ |
| POST   | /register | Register new user        |
| POST   | /login    | Login user (sets cookie) |
| POST   | /logout   | Clear auth cookie        |

### `/api/protected` (Guarded)

| Method | Route      | Description              |
| ------ | ---------- | ------------------------ |
| GET    | /hasAccess | Protected resource (JWT) |

> ✅ Cookies are `HttpOnly`, `SameSite=Strict`, and sent with requests (`withCredentials: true`).

---

## Test Flow

1. ✅ Register → creates user
2. ✅ Login → sets secure cookie
3. ✅ Hit protected route → verifies access
4. ✅ Logout → clears session

---

## Tech Stack

* **Frontend**: React + Vite + TailwindCSS
* **Backend**: Express.js + JWT Auth
* **Optional DB**: MongoDB via Mongoose
* **Security**: Helmet, Rate Limiting, CORS
* **Storage**: JWTs in HttpOnly cookies
* **Communication**: Axios w/ credentials

---

## TODO / Suggestions

* Add input validation (frontend + backend)
* Swap in MongoDB
* Add role-based access
* Refactor routes and APIs

---

## Final Notes

If you get a **403 error on Port, try changing backend port:

* `.env`
* `vite.config.js` proxy

```js
// vite.config.js
server: {
  proxy: {
    '/api': 'http://localhost:5050',
  }
}
```

---

## License

MIT – use, remix, and build on it freely.
