type Props = { title: string; content: string };

function AsideItem({ title, content }: Props) {
  return (
    <div className="min-h-[100px] p-2 w-[85%] bg-[#f8faff] mt-3 font-mono border-2 border-[#fff] border-solid transition hover:border-[#dec2ff95] hover:-translate-x-3 hover:cursor-pointer hover:shadow-lg rounded-[20px] shadow-md overflow-hidden last:my-3">
      <p className="text-sm mb-1 font-bold">{title}</p>
      <p className="text-xs">{content}</p>
    </div>
  );
}

export default AsideItem;
