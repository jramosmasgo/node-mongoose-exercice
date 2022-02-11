import express from "express";
import bookRouter from "./routes/bookRoutes";

const app = express();
app.use(express.json());
app.use(bookRouter)

export default app;