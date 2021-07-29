import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import tradeRoutes from "./routes/trades.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/trades", tradeRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on Port ${PORT}`))
  )
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
