import Carousel from "./components/carousel";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Section from "./components/section";
import Section2 from "./components/section2";
import Services from "./components/services";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Section />
      <Section2 />
      <Carousel />
    </>
  );
};

export default App;
