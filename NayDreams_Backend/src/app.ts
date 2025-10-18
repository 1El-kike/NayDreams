import express from "express";
import http from "http";
import { envs } from "./config/env.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors";
import authRouter from "./routers/auth_router.js";
import productsRouter from "./routers/products_router.js";
import reviewsRouter from "./routers/reviews_router.js";
import categoriesRouter from "./routers/categories_router.js";

const app = express();
const server = http.createServer(app);

const corsOption = {
  origin: [
    envs.PRODUCION, // URL de producción
    envs.DEVELOPEMENT, // URL de desarrollo
    "https://naydreams.netlify.app", // Agregar la URL de Netlify
  ].filter(Boolean),
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());

app.use(cors(corsOption));
app.use(morgan("dev"));

// Endpoint para mantener el servidor activo
app.get("/ping", (req, res) => {
  res
    .status(200)
    .json({ message: "Server is alive", timestamp: new Date().toISOString() });
});

// REST API
app.use("/auth", authRouter);
app.use("/products", productsRouter);
app.use("/reviews", reviewsRouter);
app.use("/categories", categoriesRouter);

export { server };
