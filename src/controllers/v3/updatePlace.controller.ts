import { Request, Response } from "express";
import { updateUserService } from "../../services/v3/updatePlace.service";

export const updatePlaceController = async (req: Request, res: Response) => {
  const placeUpdated = await updateUserService(req.params.id, req.body);
  return res.status(200).json(placeUpdated);
};
