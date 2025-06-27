import express from "express"
import cors from "cors"
import dataRoutes from "./routes/data.routes.js"

const app = express();
app.use(cors());
app.use(express.json());

app.use("/", dataRoutes);

export default app;