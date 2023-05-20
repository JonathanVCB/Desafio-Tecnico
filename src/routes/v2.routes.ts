import { Router } from "express";
import { listPlacesController } from "../controllers/v2/listPlaces.controller";
import { retrievePlacesController } from "../controllers/v2/retrievePlaces.controller";

const v2Routes = Router();

v2Routes.get("/places", listPlacesController);
v2Routes.get("/places/:id", retrievePlacesController);

export default v2Routes;
