import User from "../models/user.model.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { Types } from "mongoose";
import { generateToken } from "../utils/jwt.js";

export const authService = {
	async signUp(payload: { name: string; email: string; password: string }) {
		const existingUser = await User.findOne({
			email: payload.email,
		});

		if (existingUser) {
			console.log("Email already exists");
			throw new Error("User with this email already exists");
		}
		const passwordHash = await hashPassword(payload.password);
		const user = await User.create({ ...payload, password: passwordHash });

		return { userId: (user._id as Types.ObjectId).toString() };
	},

	async login(email: string, password: string) {
		console.log(email, "2");
		const user: any = await User.findOne({ email });
		if (!user) {
			console.log("User doesn't exist or email is invalid");
			throw new Error("User doesn't exist or email is invalid");
		}

		console.log("Plain password:", password);
		console.log("Stored hash:", user.password);
		const ok = await comparePassword(password, user.password);
		console.log("Password match result:", ok);
		if (!ok)
			throw new Error("Invalid Credentials, Check Password Once again");

		const token = generateToken({
			userId: (user._id as Types.ObjectId).toString(),
		});
		console.log(token);
		return { token, userId: (user._id as Types.ObjectId).toString() };
	},
};
