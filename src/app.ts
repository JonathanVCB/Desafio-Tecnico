import "express-async-errors";
import express from "express";
import { handleError } from "./error/appError.error";
import cors from "cors";
import { v1Routes, userRoutes, v2Routes, v3Routes } from "./routes";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRoutes);
app.use("/v1", v1Routes);
app.use("/v2", v2Routes);
app.use("/v3", v3Routes);

app.use(handleError);

export default app;
