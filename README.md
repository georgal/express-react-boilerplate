# Express + React Auth Boilerplate (for playtime apps)

## Folder Overview
```
express-react-secured-boilerplate/
├── backend/
│   ├── controllers/         # Logic for auth
│   ├── middleware/          # Auth guard, etc.
│   ├── models/              # (For MongoDB use)
│   ├── routes/
│   │   ├── auth.js          # Simple/in-memory auth
│   │   └── auth-mongo.js    # MongoDB-based version
│   ├── index.js             # Entry for in-memory auth
│   └── index-mongo.js       # Entry for MongoDB setup
│
└── frontend/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   └── services/        # Axios and API helpers
```
---

### 1. Install deps

```bash
# Backend
cd backend
npm install

# Frontend
cd frontend
npm install
````

---

### 2. Set up `.env`

Create a `.env` file inside `backend/`:

```env
PORT=5050
JWT_SECRET=your_secret_key
NODE_ENV=development
MONGO_URI=MONGO_URI
```

---

### 3. Choose your backend mode

#### Option 1: In-memory (no DB, quick testing)

```bash
node index.js
```

#### Option 2: MongoDB (persistent users)

Update `.env` with your Mongo URI and run:

```bash
node index-mongo.js
```

---

### 4. Run the frontend

```bash
cd frontend
npm run dev
```

Visit: [http://localhost:5173](http://localhost:5173)

---

## API Routes

All routes are prefixed with `/api/auth`

| Method | Endpoint     | Description        |
| ------ | ------------ | ------------------ |
| POST   | `/register`  | Register user      |
| POST   | `/login`     | Log in, set cookie |
| POST   | `/logout`    | Clear auth cookie  |
| GET    | `/protected` | Protected resource |

---

## How to Test

1. Register → should see success
2. Login → sets JWT cookie
3. Hit "Protected" → should return secure message
4. Logout → clears cookie

> Axios is already set to send cookies: `withCredentials: true`

---

## Tech Stack

* Vite + React
* Express + Node.js
* TailwindCSS
* JWT (cookie-based)
* MongoDB-ready (optional)
* Axios with cookie support

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
proxy: {
  '/api': 'http://localhost:5050'
}
```

---

## License

MIT – use, remix, and build on it freely.
