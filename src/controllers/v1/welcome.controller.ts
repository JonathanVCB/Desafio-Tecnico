import { Request, Response } from "express";

export const welcomeController = async (req: Request, res: Response) => {
  return res.status(200).json({ message: "Bem vindo a API GeoPoly!" });
};
