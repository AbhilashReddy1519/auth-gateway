import type { Request, Response } from "express";
import { oauth2Client } from "../utils/googleClient.js";
import axios from "axios";
import User from "../models/user.model.js";
import { generateToken } from "../utils/jwt.js";
import type { Types } from "mongoose";

export async function googleAuth(req: Request, res: Response) {
	const code = req.query.code as string;
	if (!code) {
		res.status(400).json({
			status: "fail",
			message: "Invalid code or empty code",
		});
		return;
	}
	try {
		const googleResponse = await oauth2Client.getToken(code);
		oauth2Client.setCredentials(googleResponse.tokens);
		const userRes = await axios.get(
			`https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleResponse.tokens.access_token}`,
		);
		const { data } = userRes;
		const { email, name, picture } = data;
		let user = await User.findOne({ email });
		let message = "User Logged in successfully";

		if (!user) {
			user = await User.create({
				name,
				email,
				password: "12345678",
			});
			message = "User Signed up successfully";
		}
		console.log(message);
		const { _id } = user;
		const token = generateToken({
			userId: (_id as Types.ObjectId).toString(),
		});
		

		res.cookie("token", token, {
			httpOnly: true,
			sameSite: "lax",
			signed: true,
			maxAge: 1 * 24 * 60 * 60 * 1000,
		});
		return res.json({
			status: "success",
			data: {
				message,
				email: user.email,
				role: "user",
			},
		});
	} catch (error) {
		console.error("Error in googleAuth:", error);
		res.status(500).json({
			status: "fail",
			message: "Internal Server Error",
		});
	}
}
