const multer = require("multer");
const path = require("path");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "/tmp"); // Render safe
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Solo file immagine consentiti"), false);
  }
};

const upload = multer({ storage, fileFilter });

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File non ricevuto da multer" });
    }

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "playlists",
    });

    fs.unlinkSync(req.file.path);

    return res.status(200).json({
      url: result.secure_url,
    });

  } catch (err) {
    console.error("Errore upload:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { upload, uploadImage };