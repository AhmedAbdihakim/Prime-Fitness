import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import { useState } from "react";
import Classes from "./components/Classes";
import Membership from "./components/Membership";
import Trainers from "./components/Trainers";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div>
      <Navbar isNavOpen={isNavOpen} handleNavOpen={handleNavOpen} />
      <Home />
      <About />
      <Classes />
      <Membership />
      <Trainers />
      <Contact />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
