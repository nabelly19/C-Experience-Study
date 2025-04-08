const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const personagemRoutes = require("./src/routes/routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/personagens", personagemRoutes);

app.use((req, res) => {
    res.status(404).json({ message: "Endpoint não encontrado." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));