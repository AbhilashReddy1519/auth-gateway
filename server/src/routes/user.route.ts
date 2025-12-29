import { Router } from "express";
import { login, signUp } from "../middlewares/user.middleware.js";

const router = Router();

router.post("/signin", signUp);
router.get("/health", (req, res) => {
	res.json({
		status: "OK",
	});
});
router.post('/login',login);

export default router;
