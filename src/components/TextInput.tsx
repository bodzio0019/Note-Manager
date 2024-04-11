function TextInput() {
  return (
    <>
      <input
        type="text"
        className="w-3/4 h-[40px] my-3 p-4 bg-[#ebf1fd] font-mono outline-none border-2 border-[#fff] border-solid transition focus:border-blue-200 rounded-[30px] shadow-lg placeholder:animate-pulse"
        placeholder="Title"
      />
      <textarea
        className="w-3/4 h-[500px] p-4 bg-[#f5f8ff] font-mono resize-none outline-none border-2 border-[#fff] border-solid transition focus:border-blue-200 rounded-[30px] shadow-xl placeholder:animate-pulse"
        placeholder="Write some notes..."
      ></textarea>
      <div className="w-3/4 py-5 flex justify-between">
        <button className="h-[40px] border border-[#fff] hover:border-blue-200 w-[150px] ml-10 bg-[#e0c5ff95] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider">
          Reset
        </button>
        <button className="h-[40px] w-[150px] border border-[#fff] hover:border-blue-200 mr-10 bg-[#cfa5ff95] rounded-[30px] shadow-lg transition hover:scale-110 tracking-wider">
          Save
        </button>
      </div>
    </>
  );
}

export default TextInput;
