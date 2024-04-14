import { Link } from "react-router-dom";
import AsideItem from "./AsideItem";

interface Edit {
  id: number;
  title: string;
  date: number;
  content: string;
}
type Props = { notes: Edit[] };

function AsideRight({ notes }: Props) {
  let sort: Edit[] = [];
  const copy = structuredClone(notes);
  copy.sort((a, b) => b.date - a.date);
  sort = copy.slice(0, 7);

  return (
    <aside className="h-screen w-[20%] pb-[100px] pr-5">
      <div className="h-[100px] flex items-end pb-3">Last edited:</div>
      <div>
        <div className="h-[70vh] flex flex-col overflow-auto items-center border-dashed border-y border-black-200">
          {sort.map((item) => {
            return (
              <Link
                to={`/notes/${item.id}`}
                className="flex flex-col items-center w-full"
                key={item.id}
              >
                <AsideItem
                  key={item.id}
                  title={item.title}
                  content={item.content}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}

export default AsideRight;
