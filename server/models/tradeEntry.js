import mongoose from "mongoose";

const tradeSchema = mongoose.Schema({
  symbol: String,
  entryDate: Date,
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
