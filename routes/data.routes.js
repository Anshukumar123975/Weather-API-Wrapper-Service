import express from "express"
import { getDataController } from "../controllers/data.controllers.js";

const router = express.Router();

router.post("/temp",getDataController);

export default router;