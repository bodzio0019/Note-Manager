import { Link } from "react-router-dom";

interface Edit {
  _id: string;
  title: string;
  date: number;
  content: string;
}
type Props = {
  item: Edit;
  notes: Edit[];
  setEdit: React.Dispatch<React.SetStateAction<Edit | undefined>>;
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

function SingleNote({ item, notes, setEdit, setNotes }: Props) {
  const itemFound = notes.find((i) => {
    return i._id === item._id;
  }) as Edit;
  const index = notes.indexOf(itemFound);

  function handleEdit() {
    setEdit(notes[index]);
  }

  function handleDelete() {
    const newData = notes.filter((i) => {
      return i._id !== itemFound._id;
    });
    setNotes(newData);

    fetch(`/api/notes/${itemFound.date}`, {
      method: "DELETE",
    })
      .then((result) => result.json())
      .then((result) => console.log("Data DELETE:", result))
      .catch((err) => console.log("DELETE error:", err));
  }

  return (
    <>
      <div className="shadow-inner min-h-[80vh] w-[88%] bg-[#f5f8ff] mx-[60px] rounded-[20px]">
        <h1 className="p-4 font-bold">{item.title}</h1>
        <p className="p-4">{item.content}</p>
      </div>
      <div className="w-3/4 py-5 flex justify-between">
        <Link to="/">
          <button
            className="h-[40px] border border-[#fff] hover:border-blue-200 w-[150px] ml-10 bg-[#e3bbbb] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider"
            onClick={handleDelete}
          >
            Delete
          </button>
        </Link>
        <Link to="/newNote">
          <button
            className="h-[40px] w-[150px] border border-[#fff] hover:border-blue-200 mr-10 bg-[#a5ffac95] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider"
            onClick={handleEdit}
          >
            Edit
          </button>
        </Link>
      </div>
    </>
  );
}

export default SingleNote;
