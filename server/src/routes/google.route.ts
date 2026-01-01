import { Router } from "express";
import { googleAuth } from "../middlewares/google.middleware.js";


const router = Router();

router.get("/", googleAuth);







export default router;