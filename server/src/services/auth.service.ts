import type { Request, Response } from "express";
import User from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/index.js";

export const authUser = {
	tokenAuth: async (req: Request, res: Response) => {
		const token = req.signedCookies.token;
		console.log({ ...req.signedCookies }, { ...req.cookies });

		if (!token) {
			return res.status(401).json({
				status: "fail",
				message: "Not authenticated",
			});
		}

		try {
			const decoded = jwt.verify(token, JWT_SECRET_KEY as string) as {
				userId: string;
			};

			const user = await User.findById(decoded.userId);

			if (!user) {
				return res.status(401).json({
					status: "fail",
					message: "User not found",
				});
			}

			return res.status(200).json({
				status: "success",
				user,
			});
		} catch (error) {
			return res
				.status(401)
				.json({ status: "fail", message: "Invalid token" });
		}
	},
};
