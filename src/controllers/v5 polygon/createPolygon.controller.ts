import { Request, Response } from "express";
import { createPolygonService } from "../../services/v5 polygon/createPolygon.service";

export const createPolygonController = async (req: Request, res: Response) => {
  const polygon = await createPolygonService(req.body);
  return res.status(201).json(polygon);
};
