
const express = require("express");
const router = express.Router();
const Questao = require("../models/Questao");
const auth = require("../middleware/auth");

// GET /questoes
router.get("/", auth, async (req, res) => {
  try {
    const questoes = await Questao.find();
    res.json(questoes);
  } catch (err) {
    res.status(500).json({ erro: err.message });
  }
});

module.exports = router;