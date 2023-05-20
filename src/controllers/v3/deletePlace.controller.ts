import { Request, Response } from "express";
import { deleteUserService } from "../../services/v3/deleteUser.service";

export const deletePlaceController = async (req: Request, res: Response) => {
  const placeUpdated = await deleteUserService(req.params.id);
  return res.status(200).json(placeUpdated);
};
