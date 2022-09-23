import "./App.css";

import Header from "./components/Header";
import Notify from "./components/Notify";
import Illustration from "./components/Illustration";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="box-border flex flex-col justify-center items-center h-screen">
      <h1 className="mb-5 text-3xl font-bold uppercase sm:text-5xl">creed</h1>
      <Header />
      <Notify />
      <Illustration />
      <Footer />
    </div>
  );
}

export default App;
