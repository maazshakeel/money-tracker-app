import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { TransactionModel } from "./models/transaction.model";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json("ok");
});

app.post("/api/transaction", async (req, res) => {
  console.log(process.env.MONGO_URL);
  //@ts-ignore
  await mongoose.connect(process.env.MONGO_URL);
  const { name, price, description, datetime } = req.body;
  const transaction = await TransactionModel.create({
    name,
    price,
    description,
    datetime,
  });
  res.json(transaction);
});

app.listen(4040, () => {
  console.log("App is running!");
});
