import express from "express";
import mongoose from "mongoose";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import { registerApi } from "./src/routes/index.js";
import { globalErrorMiddleware } from "./src/middlewares/index.js";

const app = express();
const server = http.createServer(app);
app.use(express.json());
app.use(cors({ credentials: true }));

app.set("trust proxy", true);
const port = process.env.PORT || 3000;
dotenv.config();
registerApi(app);
app.use(globalErrorMiddleware);
app.get("/api/health", (req, res) => {
  res.status(200).json("OK");
});


mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });


server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});