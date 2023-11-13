const express = require("express");
const router = express.Router();
const MandaraController = require("../controllers/mandara-controller");

router.post("/", MandaraController.createMandara);
router.get("/", MandaraController.getAllMandaras);

module.exports = router;
