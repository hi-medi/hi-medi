const express = require("express");
const router = express.Router();
const cron = require("node-cron");
const uploadImage = require("../middlewares/image-uploader");
const MandaraController = require("../controllers/mandara-controller");

cron.schedule("0 0 * * *", MandaraController.deleteMandaraAtMidnight);
router.post("/", uploadImage.single("image"), MandaraController.createMandara);
router.get("/", MandaraController.getAllMandaras);
router.get("/:id", MandaraController.getMandaraById);

module.exports = router;
