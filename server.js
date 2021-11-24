import express from "express";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.send("Server side Working");
});

app.listen(PORT, () => {
  console.log(`Listning at port ---> ${PORT}`);
});
