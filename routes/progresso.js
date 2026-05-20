const express = require("express");
const router = express.Router();
const Progresso = require("../models/Progresso");

// 🔎 GET: buscar progresso do usuário
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;

    let user = await Progresso.findOne({ userId });

    // se não existir, cria automaticamente
    if (!user) {
      user = await Progresso.create({
        userId,
        respondidas: 0,
        acertos: 0,
        erros: 0,
        questoes: []
      });
    }

    res.json(user);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar progresso" });
  }
});


// 💾 POST: salvar/atualizar progresso
router.post("/update", async (req, res) => {
  try {
    const { userId, respondidas, acertos, erros, questao } = req.body;

    let user = await Progresso.findOne({ userId });

    if (!user) {
      user = await Progresso.create({
        userId,
        respondidas: 0,
        acertos: 0,
        erros: 0,
        questoes: []
      });
    }

    // atualiza estatísticas gerais
    user.respondidas = respondidas;
    user.acertos = acertos;
    user.erros = erros;

    // atualiza questão individual
    const index = user.questoes.findIndex(q => q.id === questao.id);

    if (index !== -1) {
      user.questoes[index] = questao;
    } else {
      user.questoes.push(questao);
    }

    await user.save();

    res.json({
      message: "Progresso atualizado com sucesso",
      progresso: user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar progresso" });
  }
});

module.exports = router;
