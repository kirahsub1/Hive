import React from "react";
import Navbar from "../component/home/navbar";
import Hero from "../component/home/hero";
import Services from "../component/home/services";
import Process from "../component/home/process";
import About from "../component/home/about";
import Tracking from "../component/home/tracking";
import Testimony from "../component/home/testimony";
import Contact from "../component/home/contact";
import Partners from "../component/home/partners";
import Footer from "../component/home/footer";
const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <Process/>
      <About/>
      <Tracking/>
      <Testimony/>
      <Contact/>
      <Partners/>
      <Footer/>
    </div>
  );
};

export default home;
