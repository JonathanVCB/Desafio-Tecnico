import { Request, Response } from "express";
import { distanceWithRadiusPlaceService } from "../../services/v4/listPlacesWithRadius.service";

export const distanceWithRadiusPlacesController = async (
  req: Request,
  res: Response
) => {
  const { latitude, longitude, radius } = req.query;
  const distanceWithRadiusPlace = await distanceWithRadiusPlaceService(
    latitude,
    longitude,
    radius
  );

  return res.status(200).json(distanceWithRadiusPlace);
};
