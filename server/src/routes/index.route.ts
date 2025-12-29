import app from "../app.js";
import userRouter from './user.route.js';


app.use('/user', userRouter);