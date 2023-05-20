import { Router } from "express";
import { userLoginController } from "../controllers/v1/login.controller";
import { bodyValidator } from "../middlewares";
import { welcomeController } from "../controllers/v1/welcome.controller";
import { userCreateRequestSchema } from "../schemas/user";

const v1Routes = Router();

v1Routes.get("/", welcomeController);
v1Routes.post(
  "/auth",
  bodyValidator(userCreateRequestSchema),
  userLoginController
);

export default v1Routes;
