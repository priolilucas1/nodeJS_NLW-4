import { UserController } from "./controllers/UserController";
import { Router } from "express";

export const router = Router();

const userController = new UserController();

router.post("/users", userController.create);
