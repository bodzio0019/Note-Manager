import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import TextInput from "../components/TextInput";

interface Edit {
  id: number;
  title: string;
  date: number;
  content: string;
}
type Props = {
  edit: Edit | undefined;
  notes: Edit[];
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
function NewNote({ edit, notes, setNotes }: Props) {
  return (
    <>
      <main className="flex h-full">
        <AsideLeft />
        <section className="h-full w-full mt-[50px] flex flex-col items-center">
          <TextInput edit={edit} notes={notes} setNotes={setNotes} />
        </section>
        <AsideRight />
      </main>
    </>
  );
}

export default NewNote;
