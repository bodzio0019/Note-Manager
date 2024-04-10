function TextInput() {
  return (
    <>
      <input
        type="text"
        className="w-3/4 h-[40px] my-3 p-4 font-mono outline-none border-2 border-transparent border-solid transition focus:border-blue-300 rounded-[30px] shadow-lg placeholder:animate-pulse"
        placeholder="Title"
      />
      <textarea
        className="w-3/4 h-[400px] p-4 font-mono resize-none outline-none border-2 border-transparent border-solid transition focus:border-blue-300 rounded-[30px] shadow-xl placeholder:animate-pulse"
        placeholder="Write some notes..."
      ></textarea>
    </>
  );
}

export default TextInput;
