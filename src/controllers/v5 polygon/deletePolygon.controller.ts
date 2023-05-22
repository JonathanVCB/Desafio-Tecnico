import { Request, Response } from "express";
import { deletePolygonService } from "../../services/v5 polygon/deletePolygon.service";

export const deletePolygonController = async (req: Request, res: Response) => {
  const polygonDeleted = await deletePolygonService(req.params.id);
  return res.status(204).json(polygonDeleted);
};
