import type { Request, Response, NextFunction } from "express";
import { authService } from "../services/user.service.js";
import type { user } from "../types/models.js";



export async function signUp(req: Request,res: Response,next: NextFunction) {
  try {
    const payload = req.body as user;
    const result = await authService.signUp(payload);

    return res.send(result);
  } catch(error) {
    return res.send(error);
  }
}