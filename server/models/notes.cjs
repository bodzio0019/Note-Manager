const mongoose = require("mongoose");

const ElementScheme = new mongoose.Schema({
  title: String,
  date: Number,
  content: String,
});

const Notes = mongoose.model("note", ElementScheme);

module.exports = Notes;
