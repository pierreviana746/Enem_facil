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
app.use("/progresso", require("./routes/progresso"));
app.use(express.static(path.join(__dirname, "public")));

// AQUI É O FINAL (OBRIGATÓRIO)
const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
