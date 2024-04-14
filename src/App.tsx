import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./pages/NewNote";
import AllNotes from "./pages/AllNotes";
import Note from "./pages/Note";
import { useState } from "react";
import data from "./data/data";

function App() {
  interface Edit {
    id: number;
    title: string;
    date: number;
    content: string;
  }

  const [edit, setEdit] = useState<Edit | undefined>(undefined);
  const [notes, setNotes] = useState(data);

  return (
    <Routes>
      <Route
        path="/"
        element={<NewNote edit={edit} notes={notes} setNotes={setNotes} />}
      />
      <Route path="/allnotes" element={<AllNotes notes={notes} />} />
      <Route
        path="/notes/:noteId"
        element={<Note notes={notes} edit={edit} setEdit={setEdit} />}
      />
    </Routes>
  );
}

export default App;
