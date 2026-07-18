import React from "react";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import About from "./components/About/About";
import Experties from "./components/Experties/Experties";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Experties/>
      <Footer />
    </div>
  );
};

export default App;
