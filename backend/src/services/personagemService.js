const pool = require("../config/db");

async function getAllPersonagens() {
  const sql = "SELECT * FROM personagens";
  const [rows] = await pool.query(sql);
  return rows;
}

async function getPersonagemById(id) {
  const sql = "SELECT * FROM personagens WHERE id = ?";
  const [rows] = await pool.query(sql, [id]);
  return rows[0];
}

async function createPersonagem(personagem) {
  // Campos: nome, descricao, universo_id, ano_criacao, criador, imagem_url
  const { nome, descricao, universo_id, ano_criacao, criador, imagem_url } = personagem;
  const sql = `
    INSERT INTO personagens (nome, descricao, universo_id, ano_criacao, criador, imagem_url)
    VALUES (?, ?, ?, ?, ?, ?)
  `;
  const [result] = await pool.query(sql, [nome, descricao, universo_id, ano_criacao, criador, imagem_url]);
  return result.insertId;
}

async function updatePersonagem(id, personagem) {
  const { nome, descricao, universo_id, ano_criacao, criador, imagem_url } = personagem;
  const sql = `
    UPDATE personagens
    SET nome = ?, descricao = ?, universo_id = ?, ano_criacao = ?, criador = ?, imagem_url = ?
    WHERE id = ?
  `;
  await pool.query(sql, [nome, descricao, universo_id, ano_criacao, criador, imagem_url, id]);
}

async function deletePersonagem(id) {
  const sql = "DELETE FROM personagens WHERE id = ?";
  await pool.query(sql, [id]);
}

module.exports = {
  getAllPersonagens,
  getPersonagemById,
  createPersonagem,
  updatePersonagem,
  deletePersonagem,
};