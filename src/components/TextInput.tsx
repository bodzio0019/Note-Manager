import { useEffect } from "react";
import { Link } from "react-router-dom";

interface Edit {
  id: number;
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
        id: number;
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
      return i.id === (edit ? edit.id : null);
    });
    if (itemFound) {
      const index = notes.indexOf(itemFound);
      const newNotes = [...notes];
      newNotes[index].content = document.querySelector("textarea")!.value;
      newNotes[index].title = document.querySelector("input")!.value;
      newNotes[index].date = Date.now();
      setNotes(newNotes);
    } else {
      const newNotes = [...notes];
      const newItem = {
        id: 0,
        title: document.querySelector("input")!.value,
        date: Date.now(),
        content: document.querySelector("textarea")!.value,
      };
      newNotes.push(newItem);
      const index = newNotes.indexOf(newItem);
      newNotes[index].id = newNotes[index - 1] ? newNotes[index - 1].id + 1 : 1;
      setNotes(newNotes);
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
