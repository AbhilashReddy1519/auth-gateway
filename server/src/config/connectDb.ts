import { connect } from "mongoose";
import { MONGODB_DB_NAME, MONGODB_URL } from "./index.js";

export async function connectDb() : Promise<void> {
	if (!MONGODB_URL || !MONGODB_DB_NAME) {
		console.log(
			"Error: MONGODB_URL or MONGODB_DB_NAME is not defined in environment variables.",
		);
    return;
	}
	try {
    const connectionString = `${MONGODB_URL}/${MONGODB_DB_NAME}`;
		await connect(connectionString);
		console.log("Database connected successfully");
	} catch (error) {
		console.error("Connection Failed: ", error);
    process.exit(1);
	}
}


