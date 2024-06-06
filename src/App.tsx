import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./pages/NewNote";
import AllNotes from "./pages/AllNotes";
import Note from "./pages/Note";
import { useEffect, useState } from "react";

function App() {
  interface Edit {
    _id: string;
    title: string;
    date: number;
    content: string;
  }

  const [edit, setEdit] = useState<Edit | undefined>(undefined);
  const [notes, setNotes] = useState<Edit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch("/api/notes")
      .then((result) => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error("Failed connection to the server");
        }
      })
      .then((result) => {
        console.log("Data GET:", result);
        setNotes(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(`GET error: ${err.message}`);
      });
  }, []);

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
            loading={loading}
          />
        }
      />
      <Route
        path="/"
        element={<AllNotes notes={notes} setEdit={setEdit} loading={loading} />}
      />
      <Route
        path="/notes/:noteId"
        element={
          <Note
            notes={notes}
            setEdit={setEdit}
            setNotes={setNotes}
            loading={loading}
          />
        }
      />
    </Routes>
  );
}

export default App;
