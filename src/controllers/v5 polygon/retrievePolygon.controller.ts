import { Request, Response } from "express";
import { retrievePolygonService } from "../../services/v5 polygon/retrieveLocation.service";

export const retrievePolygonController = async (
  req: Request,
  res: Response
) => {
  const polygon = await retrievePolygonService(req.params.id);
  return res.status(200).json(polygon);
};
