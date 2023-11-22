const { S3Client } = require("@aws-sdk/client-s3");
const multer = require("multer");
const multerS3 = require("multer-s3");
const path = require("path");

require("dotenv").config();

const s3 = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

const allowedExtensions = [".png", ".jpg", ".jpeg", ".bmp", ".gif"];

const uploadImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    contentType: multerS3.AUTO_CONTENT_TYPE,
    key: (req, file, callback) => {
      console.log("여기까지 온다", file);
      if (!file) {
        return callback(new Error("사진을 한 장 업로드 해주세요."));
      }
      console.log(file);
      const directory = "hi-medi";
      const extension = path.extname(file.originalname).toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        return callback(new Error("이미지 형식의 파일만 업로드 가능합니다."));
      }
      callback(null, `${directory}/${Date.now()}_${file.originalname}`);
    },
  }),
  limits: { fileSize: 10 * 1024 * 1024 },
});

module.exports = uploadImage;
