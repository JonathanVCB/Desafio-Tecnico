import { Request, Response } from "express";
import { retrieveLocationService } from "../../services/v5 point/retrieveLocation.service";

export const retrieveLocationController = async (
  req: Request,
  res: Response
) => {
  const location = await retrieveLocationService(req.params.id);
  return res.status(200).json(location);
};
