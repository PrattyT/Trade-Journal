import TradeEntry from "../models/tradeEntry.js";
import mongoose from "mongoose";

export const getTrades = async (req, res) => {
  try {
    const tradeEntries = await TradeEntry.find();
    console.log(tradeEntries);
    res.status(200).json(tradeEntries);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createTrade = async (req, res) => {
  const body = req.body;
  const trade = new TradeEntry(body);

  try {
    await trade.save();
    res.status(201).json(trade);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateTrade = async (req, res) => {
  const { id: _id } = req.params;
  const trade = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that Id");

  const updatedTrade = await TradeEntry.findByIdAndUpdate(
    _id,
    { ...trade, _id },
    {
      new: true,
    }
  );

  res.json(updatedTrade);
};
