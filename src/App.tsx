import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./pages/NewNote";
import AllNotes from "./pages/AllNotes";
import Note from "./pages/Note";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewNote />} />
      <Route path="/allnotes" element={<AllNotes />} />
      <Route path="/notes/:noteId" element={<Note />} />
    </Routes>
  );
}

export default App;
