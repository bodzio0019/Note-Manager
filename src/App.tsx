import "./App.css";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import TextInput from "./components/TextInput";

function App() {
  return (
    <>
      <main className="flex h-full">
        <AsideLeft />
        <section className="h-full w-full mt-[100px] flex flex-col items-center">
          <TextInput />
        </section>
        <AsideRight />
      </main>
    </>
  );
}

export default App;
