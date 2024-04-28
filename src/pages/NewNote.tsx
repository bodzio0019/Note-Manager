import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import TextInput from "../components/TextInput";

interface Edit {
  _id: string;
  title: string;
  date: number;
  content: string;
}
type Props = {
  edit: Edit | undefined;
  setEdit: React.Dispatch<React.SetStateAction<Edit | undefined>>;
  notes: Edit[];
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

function NewNote({ edit, setEdit, notes, setNotes, loading }: Props) {
  return (
    <>
      <main className="flex h-full">
        <AsideLeft setEdit={setEdit} />
        <section className="h-full w-full mt-[50px] flex flex-col items-center">
          <TextInput edit={edit} notes={notes} setNotes={setNotes} />
        </section>
        <AsideRight notes={notes} loading={loading} />
      </main>
    </>
  );
}

export default NewNote;
