import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.get("/api/test", (req, res) => {
  res.json("ok");
});

app.post("/api/transaction", (req, res) => {
  console.log(process.env.MONGO_URL);
  res.json(req.body);
});

app.listen(4040, () => {
  console.log("App is running!");
});
