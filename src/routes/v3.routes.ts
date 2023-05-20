import { Router } from "express";
import { bodyValidator } from "../middlewares";
import { CreatePlaceRequestSchema } from "../schemas/place/createPlace.schema";
import { createPlaceController } from "../controllers/v3/cratePlace.controller";
import { updatePlaceRequestSchema } from "../schemas/place/updatePlace.schema";
import { updatePlaceController } from "../controllers/v3/updatePlace.controller";
import { deletePlaceController } from "../controllers/v3/deletePlace.controller";

const v3Routes = Router();

v3Routes.post(
  "/places",
  bodyValidator(CreatePlaceRequestSchema),
  createPlaceController
);
v3Routes.patch(
  "/places/:id",
  bodyValidator(updatePlaceRequestSchema),
  updatePlaceController
);
v3Routes.delete("/places/:id", deletePlaceController);

export default v3Routes;
