const express = require("express");
const router = express.Router();
const Progresso = require("../models/Progresso");

async function getOrCreateUser(userId) {
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

  return user;
}
// 🔎 GET: buscar progresso do usuário
router.get("/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    if (!userId || userId === "undefined") {
      return res.status(400).json({ error: "userId inválido" });
    }
    let user = await getOrCreateUser(userId);

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
    if (!userId || userId === "undefined") {
      return res.status(400).json({ error: "userId inválido" });
    }
    let user = await getOrCreateUser(userId);

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
router.post("/reset", async (req, res) => {
  try {
    const { userId } = req.body;
   if (!userId || userId === "undefined") {
      return res.status(400).json({ error: "userId inválido" });
    }

    let user = await getOrCreateUser(userId);

     user.respondidas = 0;
     user.acertos = 0;
     user.erros = 0;
     user.questoes = [];

     await user.save();

    res.json({
      message: "Progresso resetado com sucesso",
      progresso: user
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao resetar progresso" });
  }
});
module.exports = router;
