require("dotenv").config();
const mongoose = require("mongoose");
const Questao = require("./models/Questao");
const questoes = require("./questoesData");

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado");

    await Questao.deleteMany();

    await Questao.insertMany(questoes);

    console.log(`✅ ${questoes.length} questões inseridas com sucesso!`);
    process.exit();
  } catch (err) {
    console.error("❌ Erro no seed:", err);
    process.exit(1);
  }
}

seed();