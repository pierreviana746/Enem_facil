const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

const questoes = require("../questoesData");

router.get("/", auth, async (req, res) => {
  try {
    res.json(questoes);
  } catch (err) {
    res.status(500).json({
      erro: err.message
    });
  }
});

module.exports = router;
