import path from "path";
import multer from "multer";
import fs from "fs";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const uploadDir = path.join(__dirname, "../uploads");
import { fileURLToPath } from "url";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

/*
export const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Example limit of 1MB
  fileFilter: function (req, file, cb) {
    cb(null, true);
  },
});
// .single("file");
*/
export const upload = multer({
  storage: storage,
  limits: { fileSize: 1000000 }, // Set file size limit (1MB)
  fileFilter: function (req, file, cb) {
    const ext = path.extname(file.originalname).toLowerCase();
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png" && ext !== ".gif") {
      return cb(new Error("Only images are allowed"));
    }
    cb(null, true);
  },
});