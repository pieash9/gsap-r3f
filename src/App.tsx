import About from "./components/About";
import BuyNow from "./components/BuyNow";
import CanvasContainer from "./components/CanvasContainer";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div>
      <div className="h-screen w-full fixed top-0 ">
        <CanvasContainer />
      </div>

      {/* header */}

      <Hero />
      <About />
      <BuyNow />
    </div>
  );
};

export default App;
