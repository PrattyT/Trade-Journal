import express from "express";
import { getTrades, createTrade, updateTrade} from "../controllers/trades.js";

const router = express.Router();

router.get("/", getTrades);
router.post("/", createTrade);
router.patch("/:id", updateTrade);

export default router;
