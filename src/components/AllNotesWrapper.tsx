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
  let notesTrue = notes.map((item) => {
    return (
      <Link to={`/notes/${item.id}`} key={item.id}>
        <AllNotesItem key={item.id} title={item.title} content={item.content} />
      </Link>
    );
  });

  return (
    <>
      <div className="p-5 font-bold text-xl">All notes</div>
      <section className="grid grid-cols-3 w-[95%]">
        {notes.length ? (
          notesTrue
        ) : (
          <>
            <p></p>
            <Link to="/newNote">
              <p className="flex justify-center pt-10 hover:cursor-pointer transition hover:font-medium hover:scale-110">
                Let's create some notes!
              </p>
            </Link>
          </>
        )}
      </section>
    </>
  );
}

export default AllNotesWrapper;
