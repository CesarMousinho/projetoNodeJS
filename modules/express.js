const express = require("express");
const UserModel = require("../src/database/models/user.models"); // Importando o modelo User

const app = express();

app.use(express.json()); // Middleware para analisar JSON no corpo das requisições

app.get("/home", (req, res) => {
  res.contentType("application/html");
  res.status(200).send("<h1>Hello Word</h1>");
});

app.get("/users", (req, res) => {
  const users = [
    {
      name: "John Doe",
      age: 30,
      email: "jhon@doe.com",
    },
    {
      name: "Jane Doe",
      age: 25,
      email: "Jane@doe.com",
    },
  ];

  res.status(200).json(users);
});

app.post("/users", async (req, res) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ message: "Erro ao criar usuário" });
  }
});

const port = 8080;

app.listen(port, () => console.log(`Rodando na porta ${port}`));
