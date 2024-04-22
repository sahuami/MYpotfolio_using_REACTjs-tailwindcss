import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import SocialLink from "./components/SocialLink";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <SocialLink/>
        <About />
        <Skills/>
        <Work />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
