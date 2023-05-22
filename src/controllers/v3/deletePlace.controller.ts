import { Request, Response } from "express";
import { deletePlaceService } from "../../services/v3/deletePlace.service";

export const deletePlaceController = async (req: Request, res: Response) => {
  const placeDeleted = await deletePlaceService(req.params.id);
  return res.status(204).json(placeDeleted);
};
