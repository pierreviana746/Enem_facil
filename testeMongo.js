const mongoose = require("mongoose");

const uri = "mongodb+srv://pierreviana746_db_user:9RXZrt1vLj3TYPgm@cluster0.uvhkygc.mongodb.net/enemfacil?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)

.then(() => {
  console.log("✅ MongoDB conectado com sucesso!");
  process.exit();
})

.catch((err) => {
  console.log("❌ Erro ao conectar:");
  console.log(err);
  process.exit();
});