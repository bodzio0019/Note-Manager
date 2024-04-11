import { Link } from "react-router-dom";
import data from "../data/data";
import AllNotesItem from "./AllNotesItem";

function AllNotesWrapper() {
  return (
    <>
      <div className="p-5 font-bold text-xl">All notes</div>
      <section className="grid grid-cols-3">
        {data.map((item) => {
          return (
            <Link to={`/notes/${item.id}`}>
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
