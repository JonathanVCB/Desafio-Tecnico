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
import { validateTokenMiddleware } from "../middlewares";

const v5Routes = Router();

v5Routes.post("/point", validateTokenMiddleware, createLocationController);
v5Routes.get("/point/:id", validateTokenMiddleware, retrieveLocationController);
v5Routes.get("/point", validateTokenMiddleware, listLocationsController);
v5Routes.patch("/point/:id", validateTokenMiddleware, updateLocationController);
v5Routes.delete(
  "/point/:id",
  validateTokenMiddleware,
  deleteLocationController
);

v5Routes.post("/polygon", validateTokenMiddleware, createPolygonController);
v5Routes.get(
  "/polygon/:id",
  validateTokenMiddleware,
  retrievePolygonController
);
v5Routes.get("/polygon", validateTokenMiddleware, listPolygonsController);
v5Routes.patch(
  "/polygon/:id",
  validateTokenMiddleware,
  updatePolygonController
);
v5Routes.delete(
  "/polygon/:id",
  validateTokenMiddleware,
  deletePolygonController
);

export default v5Routes;
