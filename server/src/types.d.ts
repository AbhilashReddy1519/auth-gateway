export interface JWTPayload {
	userId: string;
	role?: string;
	iat?: number;
	exp?: number;
}