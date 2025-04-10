const pool = require("../config/db");

async function getAllUniversos() {
    const sql = "SELECT id, nome FROM universos";
    const [rows] = await pool.query(sql);
    return rows;
}

module.exports = {
    getAllUniversos,
};