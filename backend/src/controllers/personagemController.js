const personagemService = require("../services/personagemService");

async function getAll(req, res) {
  try {
    const personagens = await personagemService.getAllPersonagens();
    res.json(personagens);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar personagens." });
  }
}

async function getById(req, res) {
  try {
    const id = req.params.id;
    const personagem = await personagemService.getPersonagemById(id);
    if (!personagem) {
      return res.status(404).json({ message: "Personagem não encontrado." });
    }
    res.json(personagem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao buscar personagem." });
  }
}

async function create(req, res) {
  try {
    const personagemData = req.body;
    const newId = await personagemService.createPersonagem(personagemData);
    res.status(201).json({ message: "Personagem criado com sucesso.", id: newId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao criar personagem." });
  }
}

async function update(req, res) {
  try {
    const id = req.params.id;
    const personagemData = req.body;
    await personagemService.updatePersonagem(id, personagemData);
    res.json({ message: "Personagem atualizado com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao atualizar personagem." });
  }
}

async function remove(req, res) {
  try {
    const id = req.params.id;
    await personagemService.deletePersonagem(id);
    res.json({ message: "Personagem removido com sucesso." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erro ao remover personagem." });
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};