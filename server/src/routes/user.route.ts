import { Router } from "express";
import { signUp } from "../middlewares/user.middleware.js";

const router = Router();

router.post('/signin', signUp);
// app.post('/login',)


export default router;