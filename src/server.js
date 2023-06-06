// third party packages import
import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

// core modules import
import { resolve } from "path";
import { createWriteStream } from "fs";

import errorHandler from "./middlewares/errorHandler.js";

// all routes import
import allRoutes from "./routes/all.routes.js";

const PORT = process.env.PORT || 5001;
const app = express();

// setup
dotenv.config();
app.use(cors);
app.use(express.json());
app.use(express.static(resolve("uploads")));

// create a write stream (in append mode)
const accessLogStream = createWriteStream(resolve("access.log"), {
  flags: "a",
});

// setup the logger
app.use(morgan("combined", { stream: accessLogStream }));

// all routes
app.use(allRoutes);

// error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server running port: ${PORT}`));
