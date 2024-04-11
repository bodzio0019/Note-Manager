import "./App.css";
import { Routes, Route } from "react-router-dom";
import NewNote from "./pages/NewNote";
import AllNotes from "./pages/AllNotes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<NewNote />} />
      <Route path="/allnotes" element={<AllNotes />} />
    </Routes>
  );
}

export default App;
