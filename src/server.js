const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

mongoose.connect(
  "mongodb+srv://giodom:giodom@cluster0.i6wfk.gcp.mongodb.net/semana09?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// GET, POST, PUT, DELETE

// req.query = Acessar query params (para filtros, localhost/user?id=2)
// req.params = Acessar route params (para edicao, delete, localhost/user/1)
// req.body = Acessar corpo da requisicao (para criacao, edicao, voce envia un json, para isso tem que usar expres.json())
app.use(cors());
app.use(express.json());
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));
app.use(routes);
app.listen(3333);
