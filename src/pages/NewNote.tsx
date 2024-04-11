import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";
import TextInput from "../components/TextInput";

function NewNote() {
  return (
    <>
      <main className="flex h-full">
        <AsideLeft />
        <section className="h-full w-full mt-[50px] flex flex-col items-center">
          <TextInput />
        </section>
        <AsideRight />
      </main>
    </>
  );
}

export default NewNote;
