import { Request, Response } from "express";
import listLocationsService from "../../services/v5 point/listLocations.service";

export const listLocationsController = async (req: Request, res: Response) => {
  const locations = await listLocationsService();
  return res.status(200).json(locations);
};
