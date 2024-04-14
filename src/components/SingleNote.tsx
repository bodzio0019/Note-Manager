import { Link } from "react-router-dom";

interface Edit {
  id: number;
  title: string;
  date: number;
  content: string;
}
type Props = {
  item: Edit;
  edit: Edit | undefined;
  notes: Edit[];
  setEdit: React.Dispatch<React.SetStateAction<Edit | undefined>>;
};

function SingleNote({ item, notes, edit, setEdit }: Props) {
  function handleEdit() {
    const itemFound = notes.find((i) => {
      return i.id === item.id;
    }) as Edit;
    const index = notes.indexOf(itemFound);
    setEdit((edit = notes[index]));
  }

  return (
    <>
      <div className="shadow-inner bg-[#f5f8ff] mx-[60px] rounded-[20px]">
        <h1 className="p-4 font-bold">{item.title}</h1>
        <p className="p-4">{item.content}</p>
      </div>
      <div className="w-3/4 py-5 flex justify-between">
        <button className="h-[40px] border border-[#fff] hover:border-blue-200 w-[150px] ml-10 bg-[#e3bbbb] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider">
          Delete
        </button>
        <Link to="/">
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
