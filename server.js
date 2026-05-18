require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);
const express = require("express");
const cors = require("cors");
const path = require("path");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB conectado"))
  .catch(err => console.log("❌ Erro MongoDB:", err));

app.use(cors());
app.use(express.json()); 

app.use("/auth", require("./routes/auth"));
app.use("/questoes", require("./routes/questoes"));

app.use(express.static(path.join(__dirname, "public")));

// AQUI É O FINAL (OBRIGATÓRIO)
const port = process.env.PORT || 3000;

// Rota teste
app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

const Questao = require("./models/Questao");

app.post("/questoes", async (req, res) => {
  try {
    const novaQuestao = req.body;

    await Questao.create(novaQuestao);

    res.json({
      mensagem: "Questão adicionada com sucesso",
      questao: novaQuestao
    });
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});