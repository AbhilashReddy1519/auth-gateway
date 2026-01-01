import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import { PORT } from "./config/index.js";
import helmet from "helmet";
import routes from "./routes/index.route.js";
import cookieParser from 'cookie-parser';

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: [
			"http://localhost:5173",
			"http://localhost:3000",
			`http://localhost:${PORT}`,
		],
		credentials: true,
	}),
);
app.use(helmet());
app.use(cookieParser(process.env.SECRET_COOKIE || 'mySecretKey'));


// Mount all application routes
app.use("/", routes);

app.get("/server/health", (req: Request, res: Response) => {
	const health = {
		status: "OK",
		timestamp: new Date().toISOString(),
		environment: process.env.NODE_ENV,
		uptime: Math.floor(process.uptime()),
	};

	res.json(health);
});

export default app;
