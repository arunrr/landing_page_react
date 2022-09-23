const Modal = ({ setShowModal }) => {
  return (
    <>
      <div className="absolute top-0 right-0 bottom-0 left-0 z-10 m-auto w-3/4 h-1/4 bg-white rounded-xl border-2 border-sky-200 sm:h-1/4 sm:w-2/4 lg:w-2/5"></div>
      <div className="flex absolute top-0 right-0 bottom-0 left-0 z-10 flex-col justify-center items-center m-auto space-y-5">
        <p className="z-20 text-xs text-center lg:text-base sm:text-sm">
          You will be notified by email.
          <p className="mt-3 font-semibold">Thank You</p>
        </p>
        <button
          className="z-20 px-4 py-2 text-xs text-white bg-blue-500 rounded-xl sm:text-sm"
          onClick={() => setShowModal(false)}
        >
          Close
        </button>
      </div>
    </>
  );
};

export default Modal;
