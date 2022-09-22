import "./App.css";

import Header from "./components/Header";
import Notify from "./components/Notify";
import Illustration from "./components/Illustration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col justify-center items-center  box-border mt-10">
      <h1 className="font-bold uppercase">creed</h1>
      <Header />
      <Notify />
      <Illustration />
      <Footer />
    </div>
  );
}

export default App;
