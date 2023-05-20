import { Request, Response } from "express";
import listPlacesService from "../../services/v2/listPlaces.service";

export const listPlacesController = async (req: Request, res: Response) => {
  const places = await listPlacesService();
  return res.status(200).json(places);
};
