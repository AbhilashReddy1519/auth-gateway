import type { Request, Response, NextFunction } from "express";
import { authService } from "../services/user.service.js";
import type { user } from "../types/models.js";

export async function signUp(req: Request, res: Response, next: NextFunction) {
	try {
		const payload = req.body as user;
		console.log(payload);
		if (!payload) {
			res.json({
				data: payload,
			});
		}
		const result = await authService.signUp(payload);

		return res.json(result);
	} catch (error) {
		return res.send(error);
	}
}

export async function login(req: Request, res: Response) {
	try {
		const { email, password } = req.body;
		console.log(email, password);
		if (!email) return res.json({ email, password });
		const result = await authService.login(email, password);

		res.json(result);
	} catch (error: any) {
		console.error("Login error:", error);
		res.status(400).json({ error: error.message });
	}
}
