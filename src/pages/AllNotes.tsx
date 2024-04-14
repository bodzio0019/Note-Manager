import AllNotesWrapper from "../components/AllNotesWrapper";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";

interface Edit {
  id: number;
  title: string;
  date: number;
  content: string;
}
type Props = {
  notes: Edit[];
  setEdit: React.Dispatch<React.SetStateAction<Edit | undefined>>;
};

function AllNotes({ notes, setEdit }: Props) {
  return (
    <>
      <main className="flex h-full">
        <AsideLeft setEdit={setEdit} />
        <section className="h-full w-full mt-[50px] mb-[50px] flex flex-col items-center">
          <AllNotesWrapper notes={notes} />
        </section>
        <AsideRight notes={notes} />
      </main>
    </>
  );
}

export default AllNotes;
