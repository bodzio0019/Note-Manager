const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const URL = require("./pass.cjs");
const {
  showNote,
  updateNote,
  createNote,
  deleteNote,
  redirect,
  showIp,
} = require("./controllers/notes.cjs");

// Middlewares
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("../dist"));

// Connect to MongoDB and start listening
mongoose
  .connect(URL)
  .then(() => {
    console.log("Connected do MongoDB");
    try {
      app.listen(3000, () => {
        console.log("Server is listening to port 3000...");
      });
    } catch (error) {
      console.log("Failed to create server:", error);
    }
  })
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// REST API
app.get("/api/notes", showNote);

app.put("/api/notes/:date", updateNote);

app.post("/api/notes", createNote);

app.delete("/api/notes/:date", deleteNote);

app.get("/ip", showIp);

app.get("*", redirect);
