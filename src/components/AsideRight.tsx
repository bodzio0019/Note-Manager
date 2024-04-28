import { Link } from "react-router-dom";
import AsideItem from "./AsideItem";

interface Edit {
  _id: string;
  title: string;
  date: number;
  content: string;
}
type Props = { notes: Edit[]; loading: boolean };

function AsideRight({ notes, loading }: Props) {
  const copy = structuredClone(notes);
  copy.sort((a, b) => b.date - a.date);
  const sort = copy.slice(0, 7);

  let notesTrue = sort.map((item) => {
    return (
      <Link
        to={`/notes/${item._id}`}
        className="flex flex-col items-center w-full"
        key={item._id}
      >
        <AsideItem key={item._id} title={item.title} content={item.content} />
      </Link>
    );
  });

  return (
    <aside className="h-screen w-[20%] pb-[100px] pr-5">
      <div className="h-[100px] flex items-end pb-3">Last edited:</div>
      <div>
        <div className="h-[70vh] flex flex-col overflow-auto items-center border-dashed border-y border-black-200">
          {loading && <p className="pt-5">Loading...</p>}
          {!loading &&
            (notes.length ? notesTrue : <p className="pt-5">Empty</p>)}
        </div>
      </div>
    </aside>
  );
}

export default AsideRight;
