import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import { logger } from "./Middlewares/logger.js";

const app = express();
dotenv.config();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// app.use(logger);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
