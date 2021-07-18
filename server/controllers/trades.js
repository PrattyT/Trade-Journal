import TradeEntry from "../models/tradeEntry.js";

export const getTrades = async (req, res) => {
  try {
    const tradeEntries = await TradeEntry.find();
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
