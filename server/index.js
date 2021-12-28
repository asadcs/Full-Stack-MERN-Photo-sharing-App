import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import postRoutes from "./routes/posts.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

app.get("/", (req, res) => {
  res.send("hello memories API");
});
//const CONNECTION_URL =
// "mongodb+srv://asadcs:asadpscc54@cluster0.xx3v2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// "mongodb+srv://asadcs:asadpscc54@cluster0.1vvkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
console.log("asad");

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.warn("connected");
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));

//mongoose.set("useFindAndModify", false);

// app.listen(PORT, () =>
//   console.log(`Server Running on Port: http://localhost:${PORT}`)
// );
