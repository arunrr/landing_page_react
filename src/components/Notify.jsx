const Notify = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-4 mb-5 lg:flex-row lg:justify-between">
      <input
        className="py-2 mb-4 w-full text-sm text-center rounded-xl border-2 border-gray-200 border-solid lg:mr-3 lg:w-4/5 lg:py-1"
        type="email"
        placeholder="Your email address"
      />
      <div className="px-10 py-2 text-sm font-semibold text-center text-white bg-blue-500 rounded-2xl shadow-md transition-colors lg:px-1 lg:w-2/4 lg:mb-auto lg:text-xs hover:bg-slate-800">
        <a href="#">Notify Me</a>
      </div>
    </div>
  );
};

export default Notify;
