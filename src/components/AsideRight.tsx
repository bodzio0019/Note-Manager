import AsideItem from "./AsideItem";

function AsideRight() {
  return (
    <div className="h-screen w-[20%] py-[100px] pr-5">
      <aside className="h-[70vh] flex flex-col overflow-auto items-center border-dashed border-y border-black-200">
        <AsideItem />
        <AsideItem />
        <AsideItem />
        <AsideItem />
        <AsideItem />
        <AsideItem />
      </aside>
    </div>
  );
}

export default AsideRight;
