import { Request, Response, NextFunction } from "express";
import { errorMessage } from "./messages";

export const tryCatch = (controller: any) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await controller(req, res);
  } catch (error) {
    return res.status(500).send({ 
      message: errorMessage.server,
    });
  }
}