import { Link } from "react-router-dom";
import data from "../data/data";
import AsideItem from "./AsideItem";

function AsideRight() {
  return (
    <aside className="h-screen w-[20%] pb-[100px] pr-5">
      <div className="h-[100px] flex items-end pb-3">Recent notes:</div>
      <div>
        <div className="h-[70vh] flex flex-col overflow-auto items-center border-dashed border-y border-black-200">
          {data.map((item) => {
            return (
              <Link
                to={`/notes/${item.id}`}
                className="flex flex-col items-center"
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
