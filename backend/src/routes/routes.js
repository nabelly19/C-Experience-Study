const express = require("express");
const router = express.Router();
const personagemController = require("../controllers/personagemController");

router.get("/", personagemController.getAll);
router.get("/:id", personagemController.getById);
router.post("/", personagemController.create);
router.put("/:id", personagemController.update);
router.delete("/:id", personagemController.remove);

module.exports = router;