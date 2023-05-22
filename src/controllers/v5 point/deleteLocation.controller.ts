import { Request, Response } from "express";
import { deleteLocationService } from "../../services/v5 point/deleteLocation.service";

export const deleteLocationController = async (req: Request, res: Response) => {
  const placeUpdated = await deleteLocationService(req.params.id);
  return res.status(200).json(placeUpdated);
};
