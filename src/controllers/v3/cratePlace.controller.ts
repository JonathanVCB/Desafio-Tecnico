import { Request, Response } from "express";
import { createPlaceService } from "../../services/v3/createPlace.service";

export const createPlaceController = async (req: Request, res: Response) => {
  const place = await createPlaceService(req.body);
  return res.status(201).json(place);
};
