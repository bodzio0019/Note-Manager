type Props = { title: string; content: string };

function AllNotesItem({ title, content }: Props) {
  const shortContent =
    content.slice(0, 310).length < 310
      ? content.slice(0, 310)
      : content.slice(0, 310) + "...";
  const shortTitle =
    title.slice(0, 26).length < 26
      ? title.slice(0, 26)
      : title.slice(0, 26) + "...";

  return (
    <div className="h-[200px] bg-[#f5f8ff] p-2 m-4 font-mono border-2 border-[#fff] border-solid transition hover:border-blue-200 hover:scale-105 hover:cursor-pointer hover:shadow-lg rounded-[20px] shadow-md overflow-hidden">
      <p className="text-sm mb-2 font-bold">{shortTitle}</p>
      <p className="text-xs">{shortContent}</p>
    </div>
  );
}

export default AllNotesItem;
