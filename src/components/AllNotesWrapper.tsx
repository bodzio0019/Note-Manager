import data from "../data/data";
import AllNotesItem from "./AllNotesItem";

function AllNotesWrapper() {
  return (
    <>
      <div className="p-5 font-bold">All notes</div>
      <section className="grid grid-cols-3">
        {data.map((item) => {
          return (
            <AllNotesItem
              key={item.id}
              title={item.title}
              content={item.content}
            />
          );
        })}
      </section>
    </>
  );
}

export default AllNotesWrapper;
