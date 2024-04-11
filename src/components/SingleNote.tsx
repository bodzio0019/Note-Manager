type Note = {
  title: string;
  content: string;
};

function SingleNote({ title, content }: Note) {
  return (
    <>
      <div className="shadow-inner bg-[#f5f8ff] mx-[60px] rounded-[20px]">
        <h1 className="p-4 font-bold">{title}</h1>
        <p className="p-4">{content}</p>
      </div>
      <div className="w-3/4 py-5 flex justify-between">
        <button className="h-[40px] border border-[#fff] hover:border-blue-200 w-[150px] ml-10 bg-[#e3bbbb] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider">
          Delete
        </button>
        <button className="h-[40px] w-[150px] border border-[#fff] hover:border-blue-200 mr-10 bg-[#a5ffac95] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider">
          Edit
        </button>
      </div>
    </>
  );
}

export default SingleNote;
