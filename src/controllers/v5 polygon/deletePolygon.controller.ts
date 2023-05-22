import { Request, Response } from "express";
import { deletePolygonService } from "../../services/v5 polygon/deletePolygon.service";

export const deletePolygonController = async (req: Request, res: Response) => {
  const polygonUpdated = await deletePolygonService(req.params.id);
  return res.status(200).json(polygonUpdated);
};
