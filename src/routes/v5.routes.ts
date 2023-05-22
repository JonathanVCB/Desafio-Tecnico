import { Router } from "express";
import { createLocationController } from "../controllers/v5/createLocation.controller";
import { retrieveLocationController } from "../controllers/v5/retrieveLocation.controller";
import { listLocationsController } from "../controllers/v5/listLocations.controller";
import { updateLocationController } from "../controllers/v5/updateLocation.controller";
import { deleteLocationController } from "../controllers/v5/deleteLocation.controller";

const v5Routes = Router();

v5Routes.post("/location", createLocationController);
v5Routes.get("/location/:id", retrieveLocationController);
v5Routes.get("/location", listLocationsController);
v5Routes.patch("/location/:id", updateLocationController);
v5Routes.delete("/location/:id", deleteLocationController);

export default v5Routes;
