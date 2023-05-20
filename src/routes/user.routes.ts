import { Router } from "express";
import { bodyValidator } from "../middlewares";
import { createUserController } from "../controllers/user/createUser.controller";
import { userCreateRequestSchema } from "../schemas/user";

const userRoutes = Router();

userRoutes.post(
  "",
  bodyValidator(userCreateRequestSchema),
  createUserController
);

export default userRoutes;
