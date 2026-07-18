import React from "react";
import Hero from "./components/Hero/Hero";
import Education from "./components/Education/Education";
import About from "./components/About/About";
import Experties from "./components/Experties/Experties";

const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Experties/>
    </div>
  );
};

export default App;
