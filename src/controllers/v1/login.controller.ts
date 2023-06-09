import { Request, Response } from "express";
import { loginService } from "../../services/v1/login.service";

export const userLoginController = async (req: Request, res: Response) => {
  const token = await loginService(req.body);

  return res.status(200).json(token);
};
