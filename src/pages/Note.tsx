import AsideLeft from "../components/AsideLeft";
import SingleNote from "../components/SingleNote";
import AsideRight from "../components/AsideRight";
import { useParams } from "react-router-dom";

interface Edit {
  id: number;
  title: string;
  date: number;
  content: string;
}
type Props = {
  notes: Edit[];
  setEdit: React.Dispatch<React.SetStateAction<Edit | undefined>>;
  setNotes: React.Dispatch<
    React.SetStateAction<
      {
        id: number;
        title: string;
        date: number;
        content: string;
      }[]
    >
  >;
};

function Note({ notes, setEdit, setNotes }: Props) {
  const params = useParams();
  const id = params.noteId as string;
  const item = notes.find((i) => {
    return i.id === +id;
  }) as Edit;

  return (
    <>
      <main className="flex h-full">
        <AsideLeft setEdit={setEdit} />
        <section className="h-full w-full mt-[50px] mb-[50px] flex flex-col items-center">
          <SingleNote
            item={item}
            notes={notes}
            setEdit={setEdit}
            setNotes={setNotes}
          />
        </section>
        <AsideRight notes={notes} />
      </main>
    </>
  );
}

export default Note;
