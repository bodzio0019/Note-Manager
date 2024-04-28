import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

interface Edit {
  _id: string;
  title: string;
  date: number;
  content: string;
}
type Props = {
  setEdit: React.Dispatch<React.SetStateAction<Edit | undefined>>;
};

function AsideLeft({ setEdit }: Props) {
  function handleCreate() {
    setEdit(undefined);
  }

  return (
    <aside className="h-full w-1/5 flex flex-col items-center">
      <Link to="/" className="flex flex-col items-center">
        <img
          className="w-4/5 mt-8 hover:cursor-pointer"
          src={logo}
          alt="Note Manager Logo"
        />
      </Link>
      <section className="py-[100px]">
        <Link to="/">
          <p className="py-2 px-1 hover:underline hover:cursor-pointer transition hover:font-medium hover:translate-x-3">
            All notes &gt;
          </p>
        </Link>
        <Link to="/newNote" onClick={handleCreate}>
          <p className="py-2 px-1 hover:underline hover:cursor-pointer transition hover:font-medium hover:translate-x-3 js-create">
            Create new note &gt;
          </p>
        </Link>
      </section>
    </aside>
  );
}

export default AsideLeft;
