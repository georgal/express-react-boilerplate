// Packages
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');

// Routes
const authRoutes = require('./routes/auth');
const protectedRoutes = require('./routes/protected');

// App
const app = express();

// Middleware
app.use(helmet());

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(cookieParser());

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

app.get('/api/test', (req, res) => {
  res.json({ message: `API running` });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/protected', protectedRoutes);

// Start server (no DB)
app.listen(process.env.PORT || 5050, () => {
  console.log(`🚀 Server running on http://localhost:${process.env.PORT || 5050}`);
});
