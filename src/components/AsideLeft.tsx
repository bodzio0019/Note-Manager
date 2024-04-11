import logo from "../assets/logo.png";

function AsideLeft() {
  return (
    <aside className="h-full w-1/5 flex flex-col items-center">
      <img className="w-4/5 mt-8" src={logo} alt="Note Manager Logo" />
    </aside>
  );
}

export default AsideLeft;
