import { Router } from "express";
import { distancetoPlacesController } from "../controllers/v4/distancetoPlaces.controller";
import { distanceWithRadiusPlacesController } from "../controllers/v4/listPlacesWithRadius.controller";

const v4Routes = Router();

v4Routes.get("/places/:id1/distanceto/:id2", distancetoPlacesController);
v4Routes.get("/search", distanceWithRadiusPlacesController);

export default v4Routes;
