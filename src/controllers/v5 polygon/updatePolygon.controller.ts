import { Request, Response } from "express";
import { updatePolygonService } from "../../services/v5 polygon/updatePolygon.service";

export const updatePolygonController = async (req: Request, res: Response) => {
  const polygonUpdated = await updatePolygonService(req.params.id, req.body);
  return res.status(200).json(polygonUpdated);
};
