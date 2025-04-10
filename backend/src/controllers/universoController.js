const universoService = require("../services/universoService");

async function getAllUniversos(req, res) {
  try {
    const universos = await universoService.getAllUniversos();
    res.json(universos);
  } catch (error) {
    console.error("Erro ao buscar universos:", error);
    res.status(500).json({ message: "Erro ao buscar universos." });
  }
}

module.exports = {
    getAllUniversos
  };