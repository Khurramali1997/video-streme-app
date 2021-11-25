import express from "express";
import path from "path";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;
const DB = process.env.MONGODB_URI;

dotenv.config();
mongoose.connect(
  "mongodb+srv://Khurrum_ali1997:K.ali1997@movies.r09h7.mongodb.net/reactTest?retryWrites=true&w=majority" ||
    "mongodb://localhost:27017/reactTest",
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to database successfully");
  }
);

app.use(morgan("tiny"));
app.use(cors());

const Schema = mongoose.Schema;
const movieSchema = new Schema({
  name: String,
  language: String,
  releaseYear: Number,
});

const Movies = mongoose.model("Movies", movieSchema);

/*const dummyData = {
  name: "Terminator 5",
  language: "English",
  releaseYear: 2016,
};
*/
//const newMovie = new Movies(dummyData);
/*
newMovie.save((err) => {
  if (err) console.log("Failed to save");
  else console.log("data saved succesfully");
});
*/
app.get("/", (req, res) => {
  res.send("Server side Working");
});

app.post("/upload", (req, res) => {
  console.log(req);
  res.send(req);
});

app.listen(PORT, () => {
  console.log(`Listning at port ---> ${PORT}`);
});
