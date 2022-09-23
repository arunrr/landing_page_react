const Notify = () => {
  return (
    <div className="flex mt-4 mb-5">
      <input
        className="rounded-xl mr-2 pl-5 border-solid border-2 border-gray-200"
        type="email"
        placeholder="Your email address"
      />
      <div className="text-sm shadow-md text-white ml-2 font-semibold bg-blue-500 py-2 px-11 rounded-2xl hover:bg-slate-800 transition-colors">
        <a href="#">Notify Me</a>
      </div>
    </div>
  );
};

export default Notify;
