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
  const [notes, setNotes] = useState<Edit[]>(data);

  return (
    <Routes>
      <Route
        path="/newNote"
        element={
          <NewNote
            edit={edit}
            setEdit={setEdit}
            notes={notes}
            setNotes={setNotes}
          />
        }
      />
      <Route path="/" element={<AllNotes notes={notes} setEdit={setEdit} />} />
      <Route
        path="/notes/:noteId"
        element={<Note notes={notes} setEdit={setEdit} setNotes={setNotes} />}
      />
    </Routes>
  );
}

export default App;
