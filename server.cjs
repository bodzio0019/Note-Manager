const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const URL = require("./pass.cjs");

const app = express();
app.use(cors());
app.use(express.static("./dist"));

mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected do MongoDB");
    app.listen(80, () => {
      console.log("Server is listening to port 80...");
    });
  })
  .catch((err) => {
    console.group(`Failed to connect to MongoDB: ${err}`);
  });

const Lista = mongoose.model("list", { name: String });

app.get("/api/list", async (req, res) => {
  try {
    const data = await Lista.find();
    console.log(`Data sent: ${data}`);
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});
