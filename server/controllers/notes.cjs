const Notes = require("../models/notes.cjs");

const showNote = (req, res) => {
  Notes.find()
    .select("-__v")
    .then((result) => {
      console.log("Data GET:", result);
      res.json(result);
    })
    .catch((err) => {
      console.log("GET error:", err);
      res.sendStatus(404);
    });
};

const updateNote = (req, res) => {
  Notes.findOneAndUpdate({ date: req.params.date }, req.body, {
    new: true,
  })
    .then((result) => {
      console.log("Data PUT:", result);
      res.json(result);
    })
    .catch((err) => {
      console.log("PUT error:", err);
      res.sendStatus(404);
    });
};

const createNote = (req, res) => {
  Notes.create(req.body)
    .then((result) => {
      console.log("Data POST:", result);
      res.json(result);
    })
    .catch((err) => {
      console.log("POST error:", err);
      res.sendStatus(404);
    });
};

const deleteNote = (req, res) => {
  Notes.findOneAndDelete({ date: req.params.date })
    .then((result) => {
      console.log("Data DELETE:", result);
      res.json(result);
    })
    .catch((err) => {
      console.log("DELETE error:", err);
      res.sendStatus(404);
    });
};

const redirect = (req, res) => {
  console.log("Redirected to index.html");
  res.redirect("/");
};

module.exports = { showNote, updateNote, createNote, deleteNote, redirect };
