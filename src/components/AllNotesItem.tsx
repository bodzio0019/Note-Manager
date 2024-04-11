type Props = { title: string; content: string };

function AllNotesItem({ title, content }: Props) {
  return (
    <div className="h-[200px] bg-[#f5f8ff] p-2 m-3 font-mono border-2 border-[#fff] border-solid transition hover:border-blue-200 hover:scale-105 hover:cursor-pointer hover:shadow-lg rounded-[20px] shadow-md overflow-hidden">
      <p className="text-sm mb-1 font-bold">{title}</p>
      <p className="text-xs">{content}</p>
    </div>
  );
}

export default AllNotesItem;
