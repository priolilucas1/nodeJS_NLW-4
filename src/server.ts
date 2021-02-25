import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

app.get("/users", (request, response) => {
  return response.json({ message: "Hello World!" });
});

app.post("/", (request, response) => {
  return response.json({ message: "Dados foram criados com sucesso!" });
});

app.listen(3333, () => {
  console.log("Server is running! 🚀");
});
