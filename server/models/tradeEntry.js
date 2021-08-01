import mongoose from "mongoose";

const tradeSchema = mongoose.Schema({
  creator: String,
  name: String,
  symbol: String,
  status: String,
  entryDate: String,
  entryPrice: String,
  exitPrice: String,
  exitDate: String,
  notes: String,
  quantity: String,
  tags: [String],
  likes: {
    type: [String],
    default: [],
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TradeEntry = mongoose.model("TradeEntry", tradeSchema);

export default TradeEntry;
