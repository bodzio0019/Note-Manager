import { Link } from "react-router-dom";
import AllNotesItem from "./AllNotesItem";

interface Edit {
  _id: string;
  title: string;
  date: number;
  content: string;
}
type Props = { notes: Edit[]; loading: boolean };

function AllNotesWrapper({ notes, loading }: Props) {
  let notesTrue = notes.map((item) => {
    return (
      <Link to={`/notes/${item._id}`} key={item._id}>
        <AllNotesItem
          key={item._id}
          title={item.title}
          content={item.content}
        />
      </Link>
    );
  });

  return (
    <>
      <div className="p-5 font-bold text-xl">All notes</div>
      <section className="grid grid-cols-3 w-[95%]">
        {loading && (
          <>
            <p></p>
            <p className="flex justify-center pt-10">Loading...</p>
          </>
        )}
        {!loading &&
          (notes.length ? (
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
          ))}
      </section>
    </>
  );
}

export default AllNotesWrapper;
