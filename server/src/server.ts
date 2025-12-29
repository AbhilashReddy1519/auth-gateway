import app from "./app.js";
import { connectDb } from "./config/connectDb.js";
import { SERVER_PORT } from "./config/index.js";

async function start_server() {
	const PORT = SERVER_PORT;
	try {
		if (!PORT) {
			console.log(
				"Error: SERVER_PORT  is not defined in environment variables.",
			);
			return;
		}

		await connectDb();

		app.listen(PORT, () => {
			console.log(`Server is running on http://localhost:${PORT}`);
		});
	} catch (error) {
    console.error("Error: server unable to start, ",error);
  }
}

start_server();
