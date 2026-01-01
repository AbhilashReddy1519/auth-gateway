import { Router } from "express";
import userRoutes from "./user.route.js";
import googleRouter from "./google.route.js";
import { authUser } from "../services/auth.service.js";

const router = Router();

router.get("/me", authUser.tokenAuth);
router.post("/logout", (req,res) => {
  res.clearCookie("token");
  res.json({status: "OK", message: "User Logout successfull"});
})
router.use("/user", userRoutes);
router.use("/google", googleRouter)

export default router;
