import AllNotesWrapper from "../components/AllNotesWrapper";
import AsideLeft from "../components/AsideLeft";
import AsideRight from "../components/AsideRight";

function AllNotes() {
  return (
    <>
      <main className="flex h-full">
        <AsideLeft />
        <section className="h-full w-full mt-[100px] flex flex-col items-center">
          <AllNotesWrapper />
        </section>
        <AsideRight />
      </main>
    </>
  );
}

export default AllNotes;
