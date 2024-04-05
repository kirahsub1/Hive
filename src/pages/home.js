import React from "react";
import Navbar from "../component/home/navbar";
import Hero from "../component/home/hero";
import Services from "../component/home/services";
import Process from "../component/home/process";
import About from "../component/home/about";
import Tracking from "../component/home/tracking"
const home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services/>
      <Process/>
      <About/>
      <Tracking/>
    </div>
  );
};

export default home;
