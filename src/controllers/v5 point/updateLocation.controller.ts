import { Request, Response } from "express";
import { updateLocationService } from "../../services/v5 point/updateLocation.service";

export const updateLocationController = async (req: Request, res: Response) => {
  const locationUpdated = await updateLocationService(req.params.id, req.body);
  return res.status(200).json(locationUpdated);
};
