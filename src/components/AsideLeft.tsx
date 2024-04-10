import logo from "../assets/logo.jpg";
import AsideItems from "./AsideItems";

function AsideLeft() {
  return (
    <aside className="h-full w-1/4 flex flex-col items-center">
      <img className="w-3/5 mt-8" src={logo} alt="Note Manager Logo" />
      <AsideItems />
    </aside>
  );
}

export default AsideLeft;
