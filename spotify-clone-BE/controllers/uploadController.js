const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = multer.memoryStorage(); 

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Solo file immagine consentiti"), false);
  }
};

const upload = multer({ storage, fileFilter });

const streamifier = require("streamifier");

const uploadImage = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "File non ricevuto da multer" });
    }

    const result = await new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "playlists" },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );

      streamifier.createReadStream(req.file.buffer).pipe(stream);
    });

    return res.status(200).json({
      url: result.secure_url,
    });

  } catch (err) {
    console.error("Errore upload:", err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = { upload, uploadImage };