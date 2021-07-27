import express from "express";
import { getTrades, createTrade, updateTrade, deleteTrade } from "../controllers/trades.js";

const router = express.Router();

router.get("/", getTrades);
router.post("/", createTrade);
router.patch("/:id", updateTrade);
router.delete("/:id", deleteTrade);

export default router;
