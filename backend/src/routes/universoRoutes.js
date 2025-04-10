const express = require("express");
const router = express.Router();
const universoController = require("../controllers/universoController");

router.get("/", universoController.getAllUniversos);

module.exports = router;