import bcrypt from 'bcrypt';

const SALT_ROUNDS = 12;

export async function hashPassword(password: string): Promise<string> {
	try {
		return await bcrypt.hash(password, SALT_ROUNDS);
	} catch (error) {
		console.error("Password hashing failed:", error);
		throw new Error("Password hashing failed");
	}
}

export async function comparePassword(
	plainTextPassword: string,
	hashedPassword: string,
): Promise<boolean> {
	return bcrypt.compare(plainTextPassword, hashedPassword);
}
