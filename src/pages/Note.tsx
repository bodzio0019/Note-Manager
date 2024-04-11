import AsideLeft from "../components/AsideLeft";
import SingleNote from "../components/SingleNote";
import AsideRight from "../components/AsideRight";
import { useParams } from "react-router-dom";
import data from "../data/data";

type Item = {
  id: number;
  title: string;
  content: string;
};

function Note() {
  const params = useParams();
  const id = params.noteId as string;
  const item = data.find((i) => {
    return i.id === +id;
  });

  return (
    <>
      <main className="flex h-full">
        <AsideLeft />
        <section className="h-full w-full mt-[50px] mb-[50px] flex flex-col items-center">
          <SingleNote
            title={(item as Item).title}
            content={(item as Item).content}
          />
        </section>
        <AsideRight />
      </main>
    </>
  );
}

export default Note;
