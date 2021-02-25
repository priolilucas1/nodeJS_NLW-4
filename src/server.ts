import { router } from "./routes";
import "reflect-metadata";
import express from "express";
import "./database";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3333, () => {
  console.log("Server is running! 🚀");
});
