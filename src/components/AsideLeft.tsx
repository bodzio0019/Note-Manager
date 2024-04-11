import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function AsideLeft() {
  return (
    <aside className="h-full w-1/5 flex flex-col items-center">
      <Link to="/AllNotes" className="flex flex-col items-center">
        <img
          className="w-4/5 mt-8 hover:cursor-pointer"
          src={logo}
          alt="Note Manager Logo"
        />
      </Link>
      <section className="py-[100px]">
        <Link to="/allnotes">
          <p className="py-2 px-1 hover:underline hover:cursor-pointer transition hover:font-medium hover:translate-x-3">
            All notes &gt;
          </p>
        </Link>
        <Link to="/">
          <p className="py-2 px-1 hover:underline hover:cursor-pointer transition hover:font-medium hover:translate-x-3">
            Create new note &gt;
          </p>
        </Link>
      </section>
    </aside>
  );
}

export default AsideLeft;
