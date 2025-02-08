import express from "express";
import mongoose from "mongoose"; // Conexão com o banco de dados
import bcrypt from "bcrypt"; // Cripitografa a Senha
import jwt from "jsonwebtoken"; // Cria e valida tokens JWT
import dotenv from "dotenv"; // Variaveis de ambiente do arquivo  .env

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem Vindo a nossa API" });
});

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster-api.r4sn2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-API`
  )
  .then(() => {
    app.listen(3001);
    console.log("Conetectado ao Banco!");
  })
  .catch((err) => console.log(err));

  //node app.js ou node ..app.js

  
