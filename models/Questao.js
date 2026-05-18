const mongoose = require("mongoose");

const alternativaSchema = new mongoose.Schema({
  texto: String,
  imagem: String
}, { _id: false });

const questaoSchema = new mongoose.Schema({
  id: Number,
  textoIntro: String,
  imagem: String,
  enunciado: String,

  alternativas: {
    A: alternativaSchema,
    B: alternativaSchema,
    C: alternativaSchema,
    D: alternativaSchema,
    E: alternativaSchema
  },

  correta: String,
  nivel: Number,
  disciplina: String
});

module.exports = mongoose.model("Questao", questaoSchema);