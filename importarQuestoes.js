const mongoose = require("mongoose");
require("dotenv").config();

const Questao = require("./models/Questao");

// 🔌 conectar no MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Mongo conectado para importação"))
  .catch(err => console.log(err));

// 📦 suas questões (vamos importar daqui)
const questoes = [
  {
    id: 1,
    enunciado: "Qual é a capital do Brasil?",
    alternativas: {
      A: "São Paulo",
      B: "Brasília",
      C: "Rio de Janeiro",
      D: "Salvador",
      E: "Fortaleza"
    },
    correta: "B",
    nivel: 1,
    disciplina: "Geografia"
  },

  {
    id: 2,
    enunciado: "Quanto é 10 x 10?",
    alternativas: {
      A: "100",
      B: "90",
      C: "110",
      D: "120",
      E: "80"
    },
    correta: "A",
    nivel: 1,
    disciplina: "Matemática"
  },

  {
    id: 3,
    enunciado: "Quanto é 100 x 10?",
    alternativas: {
      A: "100",
      B: "1000",
      C: "110",
      D: "120",
      E: "80"
    },
    correta: "B",
    nivel: 1,
    disciplina: "Matemática"
  },

  {
    id: 4,
    enunciado: "Quanto é 15 + 27?",
    alternativas: {
      A: "32",
      B: "40",
      C: "42",
      D: "45",
      E: "38"
    },
    correta: "C",
    nivel: 1,
    disciplina: "Matemática"
  },

  {
    id: 5,
    enunciado: "Qual é o resultado de 9 x 9?",
    alternativas: {
      A: "81",
      B: "72",
      C: "99",
      D: "90",
      E: "89"
    },
    correta: "A",
    nivel: 2,
    disciplina: "Matemática"
  },

  {
    id: 6,
    enunciado: "Quem escreveu Dom Casmurro?",
    alternativas: {
      A: "Machado de Assis",
      B: "José de Alencar",
      C: "Clarice Lispector",
      D: "Monteiro Lobato",
      E: "Graciliano Ramos"
    },
    correta: "A",
    nivel: 2,
    disciplina: "Português"
  },

  {
    id: 7,
    enunciado: "Qual é a derivada de x²?",
    alternativas: {
      A: "x",
      B: "2x",
      C: "x²",
      D: "2",
      E: "1"
    },
    correta: "B",
    nivel: 3,
    disciplina: "Matemática"
  },

  {
  id: 8,
  enunciado: "Quanto é 25 + 37?",
  alternativas: {
    A: "52",
    B: "60",
    C: "62",
    D: "64",
    E: "58"
  },
  correta: "C",
  nivel: 1,
  disciplina: "Matemática"
},

{
  id: 9,
  enunciado: "Quanto é 50 - 18?",
  alternativas: {
    A: "30",
    B: "32",
    C: "28",
    D: "35",
    E: "33"
  },
  correta: "B",
  nivel: 1,
  disciplina: "Matemática"
},

{
  id: 10,
  enunciado: "Qual é o valor de 12²?",
  alternativas: {
    A: "124",
    B: "144",
    C: "132",
    D: "154",
    E: "142"
  },
  correta: "B",
  nivel: 2,
  disciplina: "Matemática"
},

{
  id: 11,
  enunciado: "Resolva: 3x + 5 = 20. Qual o valor de x?",
  alternativas: {
    A: "3",
    B: "4",
    C: "5",
    D: "6",
    E: "7"
  },
  correta: "C",
  nivel: 2,
  disciplina: "Matemática"
},

{
  id: 12,
  enunciado: "Qual é a raiz quadrada de 169?",
  alternativas: {
    A: "11",
    B: "12",
    C: "13",
    D: "14",
    E: "15"
  },
  correta: "C",
  nivel: 3,
  disciplina: "Matemática"
},

{
  id: 13,
  enunciado: "Se f(x) = 2x + 3, qual é o valor de f(5)?",
  alternativas: {
    A: "10",
    B: "11",
    C: "12",
    D: "13",
    E: "15"
  },
  correta: "D",
  nivel: 3,
  disciplina: "Matemática"
 },

 {
  id: 14,
  enunciado: "Quem foi o primeiro presidente do Brasil?",
  alternativas: {
    A: "Getúlio Vargas",
    B: "Deodoro da Fonseca",
    C: "Juscelino Kubitschek",
    D: "Dom Pedro II",
    E: "Floriano Peixoto"
  },
  correta: "B",
  nivel: 1,
  disciplina: "História"
},

{
  id: 15,
  enunciado: "Em que ano o Brasil foi descoberto?",
  alternativas: {
    A: "1492",
    B: "1500",
    C: "1520",
    D: "1488",
    E: "1510"
  },
  correta: "B",
  nivel: 1,
  disciplina: "História"
},

{
  id: 16,
  enunciado: "O que foi a Revolução Industrial?",
  alternativas: {
    A: "Uma guerra entre países europeus",
    B: "Um movimento artístico",
    C: "Processo de transformação econômica com uso de máquinas",
    D: "Uma revolta religiosa",
    E: "Uma colonização africana"
  },
  correta: "C",
  nivel: 2,
  disciplina: "História"
},

{
  id: 17,
  enunciado: "Qual foi a principal causa da Primeira Guerra Mundial?",
  alternativas: {
    A: "A crise econômica de 1929",
    B: "A disputa imperialista entre potências europeias",
    C: "A Revolução Russa",
    D: "A independência dos EUA",
    E: "A Guerra Fria"
  },
  correta: "B",
  nivel: 2,
  disciplina: "História"
},

{
  id: 18,
  enunciado: "O que foi o Iluminismo?",
  alternativas: {
    A: "Movimento religioso medieval",
    B: "Período de guerras mundiais",
    C: "Movimento intelectual que defendia a razão",
    D: "Sistema político absolutista",
    E: "Expansão marítima europeia"
  },
  correta: "C",
  nivel: 3,
  disciplina: "História"
},

{
  id: 19,
  enunciado: "Qual foi a principal característica do Feudalismo?",
  alternativas: {
    A: "Industrialização intensa",
    B: "Economia baseada no comércio global",
    C: "Sistema baseado na relação entre senhores e servos",
    D: "Democracia direta",
    E: "Uso de tecnologia avançada"
  },
  correta: "C",
  nivel: 3,
  disciplina: "História"
 },
 {
  id: 20,
  enunciado: "Qual é o maior país da América do Sul?",
  alternativas: {
    A: "Argentina",
    B: "Colômbia",
    C: "Brasil",
    D: "Peru",
    E: "Chile"
  },
  correta: "C",
  nivel: 1,
  disciplina: "Geografia"
},

{
  id: 21,
  enunciado: "Qual é o maior oceano do mundo?",
  alternativas: {
    A: "Atlântico",
    B: "Índico",
    C: "Ártico",
    D: "Pacífico",
    E: "Antártico"
  },
  correta: "D",
  nivel: 1,
  disciplina: "Geografia"
},

{
  id: 22,
  enunciado: "O que é clima?",
  alternativas: {
    A: "Condição momentânea do tempo",
    B: "Média das condições atmosféricas ao longo do tempo",
    C: "Quantidade de chuvas em um dia",
    D: "Movimento das placas tectônicas",
    E: "Temperatura do oceano"
  },
  correta: "B",
  nivel: 2,
  disciplina: "Geografia"
},

{
  id: 23,
  enunciado: "Qual bioma brasileiro é conhecido pela grande biodiversidade e clima equatorial?",
  alternativas: {
    A: "Cerrado",
    B: "Caatinga",
    C: "Pampa",
    D: "Amazônia",
    E: "Pantanal"
  },
  correta: "D",
  nivel: 2,
  disciplina: "Geografia"
},

{
  id: 24,
  enunciado: "O que são placas tectônicas?",
  alternativas: {
    A: "Camadas de gelo dos polos",
    B: "Grandes blocos que formam a crosta terrestre",
    C: "Correntes marítimas profundas",
    D: "Massas de ar",
    E: "Regiões climáticas"
  },
  correta: "B",
  nivel: 3,
  disciplina: "Geografia"
},

{
  id: 25,
  enunciado: "Qual fator é responsável pela formação das estações do ano?",
  alternativas: {
    A: "Distância da Terra ao Sol",
    B: "Movimento das marés",
    C: "Inclinação do eixo da Terra",
    D: "Rotação da Terra",
    E: "Atividade vulcânica"
  },
  correta: "C",
  nivel: 3,
  disciplina: "Geografia"
 },
 {
  id: 26,
  enunciado: "Qual é a unidade de medida da força no Sistema Internacional?",
  alternativas: {
    A: "Joule",
    B: "Watt",
    C: "Newton",
    D: "Pascal",
    E: "Metro"
  },
  correta: "C",
  nivel: 1,
  disciplina: "Física"
},

{
  id: 27,
  enunciado: "Qual é a velocidade da luz no vácuo?",
  alternativas: {
    A: "300.000 km/s",
    B: "150.000 km/s",
    C: "30.000 km/s",
    D: "3.000 km/s",
    E: "1.000 km/s"
  },
  correta: "A",
  nivel: 1,
  disciplina: "Física"
},

{
  id: 28,
  enunciado: "Qual fórmula representa a segunda lei de Newton?",
  alternativas: {
    A: "F = m . a",
    B: "E = m . c²",
    C: "V = d / t",
    D: "P = m . g",
    E: "Q = m . c . ΔT"
  },
  correta: "A",
  nivel: 2,
  disciplina: "Física"
},

{
  id: 29,
  enunciado: "O que é energia cinética?",
  alternativas: {
    A: "Energia armazenada em um corpo",
    B: "Energia do movimento",
    C: "Energia térmica",
    D: "Energia elétrica",
    E: "Energia potencial gravitacional"
  },
  correta: "B",
  nivel: 2,
  disciplina: "Física"
},

{
  id: 30,
  enunciado: "Qual é o valor aproximado da aceleração da gravidade na Terra?",
  alternativas: {
    A: "5 m/s²",
    B: "9,8 m/s²",
    C: "15 m/s²",
    D: "20 m/s²",
    E: "25 m/s²"
  },
  correta: "B",
  nivel: 3,
  disciplina: "Física"
},

{
  id: 31,
  enunciado: "Se um corpo percorre 100 m em 10 s, qual sua velocidade média?",
  alternativas: {
    A: "5 m/s",
    B: "10 m/s",
    C: "15 m/s",
    D: "20 m/s",
    E: "25 m/s"
  },
  correta: "B",
  nivel: 3,
  disciplina: "Física"
 },
 {
  id: 32,
  enunciado: "Qual é o símbolo químico do oxigênio?",
  alternativas: {
    A: "O",
    B: "Ox",
    C: "Og",
    D: "Om",
    E: "On"
  },
  correta: "A",
  nivel: 1,
  disciplina: "Química"
},

{
  id: 33,
  enunciado: "Qual é o pH de uma solução neutra?",
  alternativas: {
    A: "0",
    B: "3",
    C: "7",
    D: "10",
    E: "14"
  },
  correta: "C",
  nivel: 1,
  disciplina: "Química"
},

{
  id: 34,
  enunciado: "O que é uma ligação iônica?",
  alternativas: {
    A: "Compartilhamento de elétrons",
    B: "Transferência de elétrons entre átomos",
    C: "Ligação entre moléculas",
    D: "Força entre prótons",
    E: "Interação nuclear"
  },
  correta: "B",
  nivel: 2,
  disciplina: "Química"
},

{
  id: 35,
  enunciado: "Qual é a fórmula química da água?",
  alternativas: {
    A: "CO2",
    B: "H2O",
    C: "O2",
    D: "NaCl",
    E: "H2SO4"
  },
  correta: "B",
  nivel: 2,
  disciplina: "Química"
},

{
  id: 36,
  enunciado: "Quantos prótons possui o átomo de carbono?",
  alternativas: {
    A: "4",
    B: "6",
    C: "8",
    D: "10",
    E: "12"
  },
  correta: "B",
  nivel: 3,
  disciplina: "Química"
},

{
  id: 37,
  enunciado: "O que ocorre em uma reação de oxidação?",
  alternativas: {
    A: "Ganho de elétrons",
    B: "Perda de elétrons",
    C: "Ganho de prótons",
    D: "Perda de nêutrons",
    E: "Fusão nuclear"
  },
  correta: "B",
  nivel: 3,
  disciplina: "Química"
 },
 {
  id: 38,
  enunciado: "Assinale a alternativa que apresenta um substantivo:",
  alternativas: {
    A: "Correr",
    B: "Feliz",
    C: "Casa",
    D: "Rapidamente",
    E: "Bonito"
  },
  correta: "C",
  nivel: 1,
  disciplina: "Português"
},

{
  id: 39,
  enunciado: "Qual das palavras abaixo é um verbo?",
  alternativas: {
    A: "Mesa",
    B: "Estudar",
    C: "Azul",
    D: "Rápido",
    E: "Grande"
  },
  correta: "B",
  nivel: 1,
  disciplina: "Português"
},

{
  id: 40,
  enunciado: "Assinale a frase com uso correto da crase:",
  alternativas: {
    A: "Vou à escola todos os dias.",
    B: "Vou a escola todos os dias.",
    C: "Vou à uma escola hoje.",
    D: "Vou a uma escola hoje.",
    E: "Vou à estudar agora."
  },
  correta: "A",
  nivel: 2,
  disciplina: "Português"
},

{
  id: 41,
  enunciado: "Na frase 'Ela comprou um livro interessante', a palavra 'interessante' é:",
  alternativas: {
    A: "Substantivo",
    B: "Verbo",
    C: "Adjetivo",
    D: "Advérbio",
    E: "Pronome"
  },
  correta: "C",
  nivel: 2,
  disciplina: "Português"
},

{
  id: 42,
  enunciado: "Leia: 'Apesar da chuva, fomos ao passeio.' A expressão 'apesar da chuva' indica:",
  alternativas: {
    A: "Causa",
    B: "Condição",
    C: "Concessão",
    D: "Tempo",
    E: "Finalidade"
  },
  correta: "C",
  nivel: 3,
  disciplina: "Português"
},

{
  id: 43,
  enunciado: "Na frase 'Os alunos chegaram cedo', o sujeito é:",
  alternativas: {
    A: "chegaram",
    B: "cedo",
    C: "os alunos",
    D: "alunos",
    E: "os"
  },
  correta: "C",
  nivel: 3,
  disciplina: "Português"
 },
 {
  id: 44,
  enunciado: "Qual organela celular é responsável pela respiração celular?",
  alternativas: {
    A: "Ribossomo",
    B: "Mitocôndria",
    C: "Lisossomo",
    D: "Retículo endoplasmático",
    E: "Núcleo"
  },
  correta: "B",
  nivel: 1,
  disciplina: "Biologia"
},

{
  id: 45,
  enunciado: "Qual é a função principal do DNA?",
  alternativas: {
    A: "Produzir energia",
    B: "Transportar oxigênio",
    C: "Armazenar informação genética",
    D: "Realizar digestão celular",
    E: "Controlar a respiração"
  },
  correta: "C",
  nivel: 1,
  disciplina: "Biologia"
},

{
  id: 46,
  enunciado: "Qual gás é essencial para a fotossíntese?",
  alternativas: {
    A: "Oxigênio",
    B: "Nitrogênio",
    C: "Hidrogênio",
    D: "Gás carbônico",
    E: "Metano"
  },
  correta: "D",
  nivel: 1,
  disciplina: "Biologia"
},

{
  id: 47,
  enunciado: "Qual sistema do corpo humano é responsável pela defesa do organismo?",
  alternativas: {
    A: "Sistema digestório",
    B: "Sistema respiratório",
    C: "Sistema nervoso",
    D: "Sistema imunológico",
    E: "Sistema circulatório"
  },
  correta: "D",
  nivel: 2,
  disciplina: "Biologia"
},

{
  id: 48,
  enunciado: "Qual a principal função dos glóbulos vermelhos?",
  alternativas: {
    A: "Combater infecções",
    B: "Produzir hormônios",
    C: "Transportar oxigênio",
    D: "Coagular o sangue",
    E: "Produzir anticorpos"
  },
  correta: "C",
  nivel: 2,
  disciplina: "Biologia"
},

{
  id: 49,
  enunciado: "A fotossíntese ocorre principalmente em qual parte da célula vegetal?",
  alternativas: {
    A: "Núcleo",
    B: "Mitocôndria",
    C: "Cloroplasto",
    D: "Membrana",
    E: "Ribossomo"
  },
  correta: "C",
  nivel: 2,
  disciplina: "Biologia"
},

{
  id: 50,
  enunciado: "Qual é o produto final da glicólise?",
  alternativas: {
    A: "Ácido pirúvico",
    B: "Glicose",
    C: "ATP",
    D: "Ácido láctico",
    E: "Oxigênio"
  },
  correta: "A",
  nivel: 3,
  disciplina: "Biologia"
},

{
  id: 51,
  enunciado: "Qual das alternativas representa corretamente a sequência da organização biológica?",
  alternativas: {
    A: "Célula → tecido → órgão → sistema → organismo",
    B: "Tecido → célula → órgão → sistema → organismo",
    C: "Órgão → célula → tecido → sistema → organismo",
    D: "Sistema → órgão → tecido → célula → organismo",
    E: "Célula → órgão → tecido → sistema → organismo"
  },
  correta: "A",
  nivel: 3,
  disciplina: "Biologia"
},

{
  id: 52,
  enunciado: "Na cadeia alimentar, os produtores são responsáveis por:",
  alternativas: {
    A: "Consumir outros seres vivos",
    B: "Produzir seu próprio alimento",
    C: "Decompor matéria orgânica",
    D: "Controlar populações",
    E: "Liberar energia térmica"
  },
  correta: "B",
  nivel: 3,
  disciplina: "Biologia"
},
{
   id: 60,    
    textoIntro: `A produção de vacinas exige uma sequência de procedimentos,
além do cumprimento estrito de verificações de segurança.No esquema, estão demonstradas as etapas 
básicas realizadas para a fabricação de uma vacina utilizando a tecnologia tradicional e o efeito dela no organismo.`,
    imagem: "/imagens/celula.png",
    enunciado: "O antígeno utilizado na vacina causa um efeito protetor contra o vírus porque.",
    alternativas: {
      A: "mata o vírus pela ligação.",
      B: "aglutina o vírus por associação.",
      C: "contém imunoglobinas de defasa.",
      D: "induz a produção de proteínas neutralizadoras.",
      E: "mantém a quantidade de anticorpos preexitentes."
  },
      correta: "D",
      nivel: 2,
      disciplina: "Biologia"
 },

 {
  id:61,
   enunciado: `QUESTÃO 95.(caderno 5 - Amarelo Enem/2024) Problemas no DNA são responsáveis por cerca de metade dos casos de perda de audição na infância.
   Um estudo com camundongos mostrou que a injeção de um vírus, geneticamente modificado, no embrião desses
   animais pode corrigir o problema e restaurar parte da audição,
   Disponível em: www.bbc.com. Acesso em: 11 jul. 2015 (adaptado),
   De acordo com o texto, qual técnica permite a correção parcial do problema?`,

   alternativas: {
   A: "Terapia gênica",
   B: "Marcação molecular",
   C: "Clonagem terapêutica",
   D: "Hibridização genômica",
   E: "Sequenciamento gênico"
 },
 correta: "A",
  nivel: 2,
  disciplina: "Biologia"
},
{
   id: 62,    
    textoIntro: `A Figura 1 apresenta o esquema de um tubo de imagem em que um filamento, na posição A, libera elétrons por efeito termiônico.
Esses elétrons formam um feixe estreito, que é acelerado por campos elétricos em direção à parte interna da tela. Nesse
caminho, o feixe de elétrons passa por outro campo elétrico, na região B, atingindo, em seguida, a parte interna da tela do tubo,
a qual é recoberta por um material que emite luz ao receber o impacto dos elétrons.`,
    imagem: "/imagens/captura(1).png",
    enunciado: "Nessa situação, qual ponto da tela será atingido pelo feixe de elétrons?",
    alternativas: {
      A: "1.",
      B: "2.",
      C: "3.",
      D: "4.",
      E: "5."
  },
      correta: "B",
      nivel: 2,
      disciplina: "Física"
 },
 {
   id: 63,    
    textoIntro: `A figura apresenta a herança genética de uma característica a partir do cruzamento de insetos de uma mesma espécie.`,
    imagem: "/imagens/questao102en.png",
    enunciado: "Qual alternativa representa a proporção fenotípica da prole resultante do cruzamento entre indivíduos da primeira geração?",
    alternativas: {
      A: { imagem: "/imagens/questao102a.png" },
      B: { imagem: "/imagens/questao102b.png" },
      C: { imagem: "/imagens/questao102c.png" },
      D: { imagem: "/imagens/questao102d.png" },
      E: { imagem: "/imagens/questao102e.png" }
  },
      correta: "B",
      nivel: 2,
      disciplina: "Física"
 },
];
// 🚀 função de importação
async function importar() {
  try {
    await Questao.deleteMany(); // limpa banco (opcional)
    await Questao.insertMany(questoes);

    console.log("✅ Questões importadas com sucesso!");

    mongoose.disconnect();
  } catch (err) {
    console.log("❌ Erro ao importar:", err);
  }
}

importar();