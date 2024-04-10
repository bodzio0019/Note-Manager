import logo from "../assets/logo.jpg";

function Header() {
  return (
    <header className="h-[120px] pt-5 flex justify-start items-center">
      <div className="h-full text-lg ml-5 flex justify-center items-center">
        <img className="h-full" src={logo} alt="Note Manager Logo" />
      </div>
    </header>
  );
}

export default Header;
