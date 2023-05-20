import { Router } from "express";

const v4Routes = Router();

v4Routes.get("/places/:id1/distanceto/:id2");
v4Routes.get(
  "search?latitude={latitude}&longitude={longitude}&radius={radius}"
);

export default v4Routes;
