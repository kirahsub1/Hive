import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Tracking from "./pages/tracking";
import About from "./pages/about";
import Service from "./pages/services"
import Register from "./pages/register";
import Login from "./pages/login";
import Nopage from "./pages/nopage"; // Uncomment if needed

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} /> {/* Default route */}
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="tracking" element={<Tracking />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Service />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Nopage />} />
        {/* <Route path="*" element={<NotFound />} />  {/* Catch-all for unmatched routes */}
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
