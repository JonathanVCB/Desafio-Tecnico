import { Request, Response } from "express";
import { createLocationService } from "../../services/v5 point/createLocation.service";

export const createLocationController = async (req: Request, res: Response) => {
  const location = await createLocationService(req.body);
  return res.status(200).json(location);
};
