import mongoose from "mongoose";

const tradeSchema = mongoose.Schema({
  creator: String,
  symbol: String,
  status: String,
  entryDate: String,
  entryPrice: String,
  exitPrice: String,
  exitDate: Date,
  notes: String,
  quantity: String,
  tags: [String],
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TradeEntry = mongoose.model("TradeEntry", tradeSchema);

export default TradeEntry;
