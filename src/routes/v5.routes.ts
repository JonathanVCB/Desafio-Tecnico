import { Router } from "express";
import { createLocationController } from "../controllers/v5/createLocation.controller";

const v5Routes = Router();

v5Routes.post("/location", createLocationController);

export default v5Routes;
