const mongoose = require("mongoose");

const progressoSchema = new mongoose.Schema({
  userId: String,
  respondidas: { type: Number, default: 0 },
  acertos: { type: Number, default: 0 },
  erros: { type: Number, default: 0 },

  questoes: [
    {
      id: String,
      respondida: Boolean,
      acertou: Boolean
    }
  ]
});

module.exports = mongoose.model("Progresso", progressoSchema);
