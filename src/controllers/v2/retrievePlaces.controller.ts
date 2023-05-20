import { Request, Response } from "express";
import { retrievePlaceService } from "../../services/v2/retrievePlace.service";

export const retrievePlacesController = async (req: Request, res: Response) => {
  const place = await retrievePlaceService(req.params.id);
  return res.status(200).json(place);
};
