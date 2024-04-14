import { Link } from "react-router-dom";
import AllNotesItem from "./AllNotesItem";

interface Edit {
  id: number;
  title: string;
  date: number;
  content: string;
}
type Props = { notes: Edit[] };

function AllNotesWrapper({ notes }: Props) {
  return (
    <>
      <div className="p-5 font-bold text-xl">All notes</div>
      <section className="grid grid-cols-3">
        {notes.map((item) => {
          return (
            <Link to={`/notes/${item.id}`} key={item.id}>
              <AllNotesItem
                key={item.id}
                title={item.title}
                content={item.content}
              />
            </Link>
          );
        })}
      </section>
    </>
  );
}

export default AllNotesWrapper;
