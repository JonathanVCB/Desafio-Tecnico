import { Router } from "express";
import { distancetoPlacesController } from "../controllers/v4/distancetoPlaces.controller";

const v4Routes = Router();

v4Routes.get("/places/:id1/distanceto/:id2", distancetoPlacesController);
// v4Routes.get(
//   "search?latitude={latitude}&longitude={longitude}&radius={radius}"
// );

export default v4Routes;
