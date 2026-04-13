const multer = require("multer");
const cloudinary = require("../config/cloudinary");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, '/tmp');  
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

// filtro immagini
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image/")) {
    cb(null, true);
  } else {
    cb(new Error("Solo file immagine consentiti"), false);
  }
};

const upload = multer({ storage, fileFilter });

// helper: upload stream Cloudinary
const streamifier = require("streamifier");

const uploadImage = async (req, res) => {
  try {
    console.log("FILE:", req.file);

    if (!req.file) {
      return res.status(400).json({ error: "File non ricevuto da multer" });
    }

    // upload stream (NO filesystem)
    const uploadFromBuffer = () =>
      new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
          { folder: "playlists" },
          (error, result) => {
            if (result) resolve(result);
            else reject(error);
          }
        );

        streamifier.createReadStream(req.file.buffer).pipe(stream);
      });

    const result = await uploadFromBuffer();

    return res.status(200).json({
      url: result.secure_url,
    });

  } catch (err) {
    console.error("Errore upload:", err);
    res.status(500).json({
      error: err.message || "Errore durante upload"
    });
  }
};

module.exports = { upload, uploadImage };