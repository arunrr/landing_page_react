import { useState } from "react";
import "./App.css";

import { Header, Notify, Illustration, Footer, Modal } from "./components";

function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="py-4 h-screen bg-gray-100">
      <div
        className={
          "box-border flex relative flex-col justify-center items-center " +
          (showModal ? "blur" : "")
        }
      >
        <h1 className="mb-5 text-3xl font-bold uppercase sm:text-5xl">creed</h1>

        <Header />
        <Notify setShowModal={setShowModal} />
        <Illustration />
        <Footer />
      </div>
      {showModal && <Modal setShowModal={setShowModal} />}
    </div>
  );
}

export default App;
