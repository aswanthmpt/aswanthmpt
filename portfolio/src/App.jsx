import React from "react"
import Home from "./pages/Home/Home"
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Services from "./pages/Services/Services";
import Works from "./pages/Works/Works";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import './App.css'
const App = () => {
  return (
    <>
    <Navbar/>
      <div id="home"><Home /></div>
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="services"><Services /></div>
      <div id="works"><Works /></div>
      <div id="contact"><Contact /></div>
      <Footer/>
    </>
  );
};

export default App;
