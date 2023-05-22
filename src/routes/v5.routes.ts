import { Router } from "express";
import { createLocationController } from "../controllers/v5 point/createLocation.controller";
import { retrieveLocationController } from "../controllers/v5 point/retrieveLocation.controller";
import { listLocationsController } from "../controllers/v5 point/listLocations.controller";
import { updateLocationController } from "../controllers/v5 point/updateLocation.controller";
import { deleteLocationController } from "../controllers/v5 point/deleteLocation.controller";
import { createPolygonController } from "../controllers/v5 polygon/createPolygon.controller";
import { retrievePolygonController } from "../controllers/v5 polygon/retrievePolygon.controller";
import { listPolygonsController } from "../controllers/v5 polygon/listPolygons.controller";
import { updatePolygonController } from "../controllers/v5 polygon/updatePolygon.controller";
import { deletePolygonController } from "../controllers/v5 polygon/deletePolygon.controller";

const v5Routes = Router();

v5Routes.post("/point", createLocationController);
v5Routes.get("/point/:id", retrieveLocationController);
v5Routes.get("/point", listLocationsController);
v5Routes.patch("/point/:id", updateLocationController);
v5Routes.delete("/point/:id", deleteLocationController);

v5Routes.post("/polygon", createPolygonController);
v5Routes.get("/polygon/:id", retrievePolygonController);
v5Routes.get("/polygon", listPolygonsController);
v5Routes.patch("/polygon/:id", updatePolygonController);
v5Routes.delete("/polygon/:id", deletePolygonController);

export default v5Routes;
