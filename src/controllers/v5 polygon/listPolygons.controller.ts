import { Request, Response } from "express";
import { listPolygonService } from "../../services/v5 polygon/listPolygons.service";

export const listPolygonsController = async (req: Request, res: Response) => {
  const polygons = await listPolygonService();
  return res.status(200).json(polygons);
};
