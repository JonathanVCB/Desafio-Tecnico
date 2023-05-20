import { Request, Response } from "express";
import { distancetoPlaceService } from "../../services/v4/distancetoPlaces.service";

export const createPlaceController = async (req: Request, res: Response) => {
  const distancetoPlace = await distancetoPlaceService(
    req.params.id1,
    req.params.id2
  );
  return res.status(200).json(distancetoPlace);
};
