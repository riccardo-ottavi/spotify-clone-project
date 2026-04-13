const express = require("express");
const cors = require("cors");
const path = require("path");
require('dotenv').config();

const songRouter = require('./routers/songRouter');
const artistRouter = require('./routers/artistRouter');
const albumRouter = require('./routers/albumRouter');
const playlistRouter = require('./routers/playlistRouter');
const uploadRouter = require('./routers/uploadRouter');

const app = express();
const PORT = process.env.PORT || 3000;

const allowedOrigins = [
  "http://localhost:5173",
  ".vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);

    if (
      allowedOrigins.some(o =>
        o.startsWith(".")
          ? origin.endsWith(o)
          : origin === o
      )
    ) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Backend is running"
  });
});

// API routes
app.use('/songs', songRouter);
app.use('/artists', artistRouter);
app.use('/albums', albumRouter);
app.use('/playlists', playlistRouter);
app.use('/upload', uploadRouter);

// Serve static files della build front-end
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/images', express.static(path.join(__dirname, 'dist', 'images')));
app.use('/audio', express.static(path.join(__dirname, 'dist', 'audio')));

// Fallback solo per richieste HTML (evita di intercettare JS/CSS)
app.use((req, res, next) => {
  if (req.method === 'GET' && !req.path.startsWith('/songs') && !req.path.startsWith('/artists') && !req.path.startsWith('/albums') && !req.path.startsWith('/playlists') && !req.path.startsWith('/upload') && !req.path.match(/\.\w+$/)) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  } else {
    next();
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});