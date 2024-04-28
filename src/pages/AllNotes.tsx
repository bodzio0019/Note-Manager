import AllNotesWrapper from "../components/AllNotesWrapper";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";

interface Edit {
  _id: string;
  title: string;
  date: number;
  content: string;
}
type Props = {
  notes: Edit[];
  setEdit: React.Dispatch<React.SetStateAction<Edit | undefined>>;
  loading: boolean;
};

function AllNotes({ notes, setEdit, loading }: Props) {
  return (
    <>
      <main className="flex h-full">
        <AsideLeft setEdit={setEdit} />
        <section className="h-full w-full mt-[50px] mb-[50px] flex flex-col items-center">
          <AllNotesWrapper notes={notes} loading={loading} />
        </section>
        <AsideRight notes={notes} loading={loading} />
      </main>
    </>
  );
}

export default AllNotes;
