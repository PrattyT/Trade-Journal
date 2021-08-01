import express from "express";
import {
  getTrades,
  createTrade,
  updateTrade,
  deleteTrade,
  likeTrade,
} from "../controllers/trades.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", getTrades);
router.post("/", auth, createTrade);
router.patch("/:id", auth, updateTrade);
router.delete("/:id", auth, deleteTrade);
router.patch("/:id/likeTrade", auth, likeTrade);

export default router;
