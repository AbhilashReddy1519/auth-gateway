import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config/index.js";
import type { JWTPayload } from "../types.js";

export function generateToken(payload: Partial<JWTPayload>): string {
	return jwt.sign(payload as object, JWT_SECRET_KEY as string, {
		expiresIn: "8h",
	});
}

export function verifyToken(token: string, JWT_SECRET_KEY: string): JWTPayload {
	try {
		const payload = jwt.verify(token, JWT_SECRET_KEY) as
			| JWTPayload
			| string;
		if (typeof payload === "string") {
			throw new Error("Invalid token payload format");
		}
		return payload;
	} catch (error: any) {
		console.error(error);
		throw new Error(error?.message ?? "Token verification failed");
	}
}
