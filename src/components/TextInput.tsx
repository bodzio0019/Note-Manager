import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Edit {
  _id: string;
  title: string;
  date: number;
  content: string;
}
type Props = {
  edit: Edit | undefined;
  notes: Edit[];
  setNotes: React.Dispatch<
    React.SetStateAction<
      {
        _id: string;
        title: string;
        date: number;
        content: string;
      }[]
    >
  >;
};

function TextInput({ edit, notes, setNotes }: Props) {
  function handleSave() {
    const itemFound = notes.find((i) => {
      return i._id === (edit ? edit._id : null);
    });
    if (itemFound) {
      const itemCopy = structuredClone(itemFound);
      const index = notes.indexOf(itemFound);
      const newNotes = [...notes];
      const content = document.querySelector("textarea")!.value;
      newNotes[index].content = content;
      const title = document.querySelector("input")!.value;
      newNotes[index].title = title;
      const time = Date.now();
      newNotes[index].date = time;
      setNotes(newNotes);

      fetch(`/api/notes/${itemCopy.date}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title, date: time, content: content }),
      })
        .then((result) => result.json())
        .then((result) => console.log("Data PUT:", result))
        .catch((err) => console.log("PUT error:", err));
    } else {
      const newNotes = [...notes];
      const newItem = {
        _id: "0",
        title: document.querySelector("input")!.value,
        date: Date.now(),
        content: document.querySelector("textarea")!.value,
      };
      newNotes.push(newItem);
      const index = newNotes.indexOf(newItem);
      newNotes[index]._id = Number(newNotes[index - 1]?._id)
        ? String(Number(newNotes[index - 1]._id) + 1)
        : "1";
      setNotes(newNotes);

      fetch("/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: newItem.title,
          date: newItem.date,
          content: newItem.content,
        }),
      })
        .then((result) => result.json())
        .then((result) => console.log("Data POST:", result))
        .catch((err) => console.log("POST error:", err));
    }
  }

  function handleReset() {
    (document.querySelector(".js-create")! as HTMLButtonElement).click();
  }

  useEffect(() => {
    document.querySelector("input")!.value = edit ? edit.title : "";
    document.querySelector("textarea")!.value = edit ? edit.content : "";
  }, [edit]);

  return (
    <>
      <input
        type="text"
        className="w-3/4 h-[40px] my-3 p-4 bg-[#ebf1fd] font-mono outline-none border-2 border-[#fff] border-solid transition focus:border-blue-200 rounded-[30px] shadow-lg placeholder:animate-pulse"
        placeholder="Title"
      />
      <textarea
        className="w-[90%] h-[600px] p-4 bg-[#f5f8ff] font-mono resize-none outline-none border-2 border-[#fff] border-solid transition focus:border-blue-200 rounded-[30px] shadow-xl placeholder:animate-pulse"
        placeholder="Write some notes..."
      ></textarea>
      <div className="w-3/4 py-5 flex justify-between">
        <button
          className="h-[40px] border border-[#fff] hover:border-blue-200 w-[150px] ml-10 bg-[#ebf1fd] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider"
          onClick={handleReset}
        >
          Reset
        </button>
        <Link to="/">
          <button
            className="h-[40px] w-[150px] border border-[#fff] hover:border-blue-200 mr-10 bg-[#cfa5ff95] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider"
            onClick={handleSave}
          >
            Save
          </button>
        </Link>
      </div>
    </>
  );
}

export default TextInput;
