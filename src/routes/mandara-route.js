const express = require("express");
const router = express.Router();
const uploadImage = require("../middlewares/image-uploader");
const MandaraController = require("../controllers/mandara-controller");

router.post("/", uploadImage.single("image"), MandaraController.createMandara);
router.get("/", MandaraController.getAllMandaras);
router.get("/:id", MandaraController.getMandaraById);

module.exports = router;
