import AsideLeft from "../components/AsideLeft";
import SingleNote from "../components/SingleNote";
import AsideRight from "../components/AsideRight";
import { useParams } from "react-router-dom";

interface Edit {
  _id: string;
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
        _id: string;
        title: string;
        date: number;
        content: string;
      }[]
    >
  >;
  loading: boolean;
};

function Note({ notes, setEdit, setNotes, loading }: Props) {
  const params = useParams();
  const id = params.noteId!;
  const item = notes.find((i) => {
    return i._id === id;
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
        <AsideRight notes={notes} loading={loading} />
      </main>
    </>
  );
}

export default Note;
