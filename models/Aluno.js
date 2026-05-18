const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema({
  nome: String,
  email: { type: String, unique: true, required: true },
  usuario: { type: String, unique: true, required: true },
  senha: String,

  verificado: {
    type: Boolean,
    default: false
    
  },
   codigoVerificacao: String
});

module.exports = mongoose.model("Aluno", alunoSchema);