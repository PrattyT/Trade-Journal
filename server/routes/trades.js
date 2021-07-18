import express from "express";
import { getTrades } from "../controllers/trades.js";

const router = express.Router();

router.get("/", getTrades);

export default router;
