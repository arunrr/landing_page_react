import "./App.css";

import { Header, Notify, Illustration, Footer } from "./components";

function App() {
  return (
    <div className="box-border flex flex-col justify-center items-center mt-5">
      <h1 className="mb-5 text-3xl font-bold uppercase sm:text-5xl">creed</h1>
      <Header />
      <Notify />
      <Illustration />
      <Footer />
    </div>
  );
}

export default App;
