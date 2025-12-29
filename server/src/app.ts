import express from "express";
import type { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import { PORT } from "./config/index.js";
import helmet from "helmet";

const app: Express = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: `http://localhost:${PORT}`,
		credentials: true,
	}),
);
app.use(helmet());

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
