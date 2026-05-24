const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Aluno = require("../models/Aluno");
const enviarCodigo = require("../mailer");

const router = express.Router();

// CADASTRO
router.post("/cadastro", async (req, res) => {
  try {
    const { nome, usuario, email, senha, dataNascimento } = req.body;
    const existe = await Aluno.findOne({
    $or: [{ usuario }, { email }]
});

    if (existe) {
      return res.status(400).json({ error: "Usuário já existe" });
    }
    const senhaHash = await bcrypt.hash(senha, 10);
    const codigo = Math.floor(100000 + Math.random() * 900000);

    const novoAluno = new Aluno({
      nome,
      usuario,
      email,
      senha: senhaHash,
      dataNascimento,
      verificado: false,
      codigoVerificacao: codigo
    });

    await novoAluno.save();
 //   try {
 //   await enviarCodigo(email, codigo);
 //  } catch (err) {
 //    console.log("Erro ao enviar email:", err);
 // }

   res.json({
      mensagem: "Aluno cadastrado com sucesso"
    });

   } catch (err) {
    res.status(500).json({ error: "Erro no cadastro" });
  }
});

  router.post("/login", async (req, res) => {
  try {
    const { usuario, senha } = req.body;

    const aluno = await Aluno.findOne({ usuario });

    if (!aluno) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

   // if (!aluno.verificado) {
   //   return res.status(400).json({
   //     error: "E-mail não verificado",
   //       code: "EMAIL_NOT_VERIFIED"
   //    });
   //  }

    const senhaOk = await bcrypt.compare(senha, aluno.senha);

    if (!senhaOk) {
      return res.status(400).json({ error: "Senha inválida" });
    }

    const token = jwt.sign(
      { id: aluno._id, nome: aluno.nome },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
  token,
  aluno: {
    _id: aluno._id,
    nome: aluno.nome,
    email: aluno.email
  }
});

  } catch (err) {
  console.error("ERRO LOGIN:", err);
  return res.status(500).json({
    error: err.message
  });
 }
});
router.post("/verificar", async (req, res) => {
  try {
    const { email, codigo } = req.body;

    const aluno = await Aluno.findOne({ email });

    if (!aluno) {
      return res.status(400).json({ error: "Usuário não encontrado" });
    }

    if (String(aluno.codigoVerificacao) !== String(codigo)) {
      return res.status(400).json({ error: "Código inválido" });
    }

    aluno.verificado = true;
    aluno.codigoVerificacao = null;

    await aluno.save();

    res.json({ mensagem: "E-mail verificado com sucesso!" });

  } catch (err) {
    res.status(500).json({ error: "Erro na verificação" });
  }
});

module.exports = router;
