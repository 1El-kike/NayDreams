import express from "express";
import http from "http";
import { envs } from "./config/env.js";
import path from "path";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import fs from "fs";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routers/auth_router.js";
import productsRouter from "./routers/products_router.js";
import reviewsRouter from "./routers/reviews_router.js";

const app = express();
const server = http.createServer(app);

const corsOption = {
  origin: [
    envs.PRODUCION, // URL de producción
    envs.DEVELOPEMENT, // URL de desarrollo
  ].filter(Boolean),
  credentials: true,
};

// Ruta de la carpeta uploads
const uploadsDir = path.join(process.cwd(), "uploads");

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

// Crear la carpeta si no existe
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true }); // "recursive" crea subcarpetas si es necesario
}

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));
app.use(cors(corsOption));
app.use(morgan("dev"));

// REST API
app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/reviews", reviewsRouter);

export { server };
