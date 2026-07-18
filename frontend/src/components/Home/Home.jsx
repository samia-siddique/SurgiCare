import React from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Education from "../Education/Education";
import Experties from "../Experties/Experties";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      
      <section id="about">
        <About />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="services">
        <Experties />
      </section>

      <section id="contact">
        <Footer />
      </section>
    </>
  );
};

export default Home;
