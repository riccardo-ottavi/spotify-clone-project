const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) cb(null, true);
  else cb(new Error("Solo immagini"), false);
};

const upload = multer({ storage, fileFilter });

const uploadImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "File non ricevuto da multer" });
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "playlists" },
        (err, result) => {
          if (err) reject(err);
          else resolve(result);
        }
      );

      stream.end(req.file.buffer);  
    });

    res.json({ url: result.secure_url });

  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { upload, uploadImage };